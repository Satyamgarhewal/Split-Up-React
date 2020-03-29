import axios from 'axios';
import userConstants from '../utils/constants';
const { ADD_USER } = userConstants;
export const setRegisterUser = response => {
  return {
    type: ADD_USER,
    payload: response
  };
};
export const registerUser = formData => {
  return dispatch => {
    axios
      .post(
        'https://cors-anywhere.herokuapp.com/http://localhost:3010/register',
        formData
      )
      .then(response => {
        dispatch(setRegisterUser(response));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
