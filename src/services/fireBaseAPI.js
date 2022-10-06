const { default: axios } = require('axios');

axios.defaults.baseURL =
  'https://wollet-ec30b-default-rtdb.europe-west1.firebasedatabase.app/';

// getIncomeTransactions = () =>

//   getDedactionTransactions = () =>

export const addIncomeTransactionsAPI = data => {
  return axios.post('transactions/income.json', data).then(respons => {
    return {
      id: respons.data.name,
      ...data,
    };
  });
};

export const addDedactionTransactionsAPI = data => {
  return axios.post('transactions/deduction.json', data).then(respons => {
    return {
      id: respons.data.name,
      ...data,
    };
  });
};

export const getTransactionsAPI = async () => {
  try {
    const response = await axios.get('transactions.json');
    const { deduction, income } = response.data;
    const dedactionArr = Object.entries(deduction).map(([id, data]) => {
      return { id, ...data };
    });
    const incomeArr = Object.entries(income).map(([id, data]) => {
      return { id, ...data };
    });
    return { deduction: dedactionArr, income: incomeArr };
  } catch (error) {
    console.log(error);
  }
};

export const addIncomeCategoryAPI = category => {
  return axios.post('categories/income.json', category).then(res => {
    return {
      id: res.data.name,
      ...category,
    };
  });
};

export const addDeductionCategoryAPI = category => {
  return axios.post('categories/deduction.json', category).then(res => {
    return {
      id: res.data.name,
      ...category,
    };
  });
};
