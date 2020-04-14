import { USER_CONSTANTS } from '../store/storeConstants';
const { SET_USER_DATA } = USER_CONSTANTS;

const USER_DATA = {
  userName: '',
};
const userReducer = (state = USER_DATA, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        token: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
