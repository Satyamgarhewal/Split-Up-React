import axios from 'axios';
import { USER_CONSTANTS } from '../store/storeConstants';
const { SET_USER_DATA } = USER_CONSTANTS;
export const setRegisterUser = (response) => {
  return {
    type: SET_USER_DATA,
    payload: response,
  };
};
export const registerUser = (formData) => {
  return (dispatch) => {
    axios
      .post(
        'https://cors-anywhere.herokuapp.com/http://localhost:3010/register',
        formData
      )
      .then((response) => {
        dispatch(setRegisterUser(response));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
