import axios from 'axios';
import userConstants from '../utils/constants';
const { ADD_USER } = userConstants;
export const setRegisterUser = response => {
  console.log('inside setRegisterUser');
  return {
    type: ADD_USER,
    payload: response
  };
};
export const registerUser = formData => {
  console.log('inside action', formData);
  return dispatch => {
    axios
      .post(
        'https://cors-anywhere.herokuapp.com/http://localhost:3010/register',
        formData
      )
      .then(response => {
        console.log(response);
        dispatch(setRegisterUser(response));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
