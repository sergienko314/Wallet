import { ThemeConsumer } from 'styled-components';

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
