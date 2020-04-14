// import axios from '../config/axios';
import axios from 'axios';
import { INDIVIDUAL_EXPENSE_CONSTANTS } from '../store/storeConstants';

const { ADD_INDIVIDUAL_EXPENSE_DATA } = INDIVIDUAL_EXPENSE_CONSTANTS;
export const setAddExpense = (userData) => {
  return {
    type: ADD_INDIVIDUAL_EXPENSE_DATA,
    payload: userData,
  };
};
export const addExpense = (userData) => {
  return (dispatch) => {
    axios
      .post(
        'https://cors-anywhere.herokuapp.com/http://localhost:3010/addExpense',
        userData
      )
      .then((response) => {
        dispatch({ response });
      });
  };
};
