import userConstants from '../utils/constants';
import stateConstants from '../utils/stateConstants';
const { ADD_USER } = userConstants;
const UserData = stateConstants;

const userReducer = (state = UserData, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        userName: action.payload.userName
      };
    }
    default: {
      return [...state];
    }
  }
};
