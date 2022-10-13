const { default: axios } = require('axios');

const API_KEY = 'AIzaSyAye3zp9mlH67OEqwcBjG_gTGwof-LDzKc';

const baseURL = {
  // register: https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // login: https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  auth: 'https://identitytoolkit.googleapis.com/v1/',
  db: 'https://wollet-ec30b-default-rtdb.europe-west1.firebasedatabase.app/',
};
const setBaseURL = url => {
  axios.defaults.baseURL = url;
};
// axios.defaults.baseURL =
//   'https://wollet-ec30b-default-rtdb.europe-west1.firebasedatabase.app/';

// getIncomeTransactions = () =>

//   getDedactionTransactions = () =>
const updateDataObjToArray = response => {
  return Object.entries(response).map(([id, data]) => {
    return { id, ...data };
  });
};

export const addIncomeTransactionsAPI = (data, localId, idToken) => {
  setBaseURL(baseURL.db);
  return axios
    .post(`users/${localId}/transactions/income.json`, data, {
      params: {
        auth: idToken,
      },
    })
    .then(respons => {
      return {
        id: respons.data.name,
        ...data,
      };
    });
};

export const addDedactionTransactionsAPI = (data, localId, idToken) => {
  setBaseURL(baseURL.db);
  return axios
    .post(`users/${localId}/transactions/deduction.json`, data, {
      params: {
        auth: idToken,
      },
    })
    .then(respons => {
      return {
        id: respons.data.name,
        ...data,
      };
    });
};

export const getTransactionsAPI = async () => {
  setBaseURL(baseURL.db);
  try {
    const response = await axios.get('transactions.json');
    const { deduction, income } = response.data;
    const dedactionArr = updateDataObjToArray(deduction);
    const incomeArr = updateDataObjToArray(income);
    return { deduction: dedactionArr, income: incomeArr };
  } catch (error) {
    console.log(error);
  }
};

export const addIncomeCategoryAPI = category => {
  setBaseURL(baseURL.db);
  return axios.post('categories/income.json', category).then(res => {
    return {
      id: res.data.name,
      ...category,
    };
  });
};

export const addDeductionCategoryAPI = category => {
  setBaseURL(baseURL.db);
  return axios.post('categories/deduction.json', category).then(res => {
    return {
      id: res.data.name,
      ...category,
    };
  });
};

export const getCategoriesAPI = categoryTransType => {
  setBaseURL(baseURL.db);
  return axios
    .get(`categories/${categoryTransType}.json`)
    .then(response => updateDataObjToArray(response.data));
};

export const registerUserAPI = user => {
  setBaseURL(baseURL.auth);
  return axios.post(`accounts:signUp?key=${API_KEY}`, {
    ...user,
    returnSecureToken: true,
  });
};

export const loginUserAPI = user => {
  setBaseURL(baseURL.auth);
  return axios.post(`accounts:signInWithPassword?key=${API_KEY}`, {
    ...user,
    returnSecureToken: true,
  });
};
