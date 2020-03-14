import axios from '../config/axios';
export const addExpense = () => {
  return dispatch => {
    axios.post('/addExpense').then(response => {
      console.log(response);
    });
  };
};
