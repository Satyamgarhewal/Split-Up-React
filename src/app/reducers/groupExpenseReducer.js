// utils
import { GROUP_EXPENSE_CONSTANTS } from '../store/storeConstants';
const { CREATE_GROUP, ADD_MEMBER } = GROUP_EXPENSE_CONSTANTS;

let groupData = {
  groupName: '',
  groupMembers: 0,
  memberDetails: [],
  totalAmount: 0,
};
const groupExpenseReducer = (state = groupData, action) => {
  switch (action.type) {
    case CREATE_GROUP: {
      const key = Object.keys(action.payload);
      const value = action.payload[key[0]];
      const amount = parseInt(action.payload.totalAmount);
      return {
        ...state,
        groupName: value,
        totalAmount: amount,
      };
    }
    case ADD_MEMBER: {
      Object.keys(state).map((key, index) => {
        if (key === 'memberDetails') {
          state[key] = [...state[key], action.payload];
          return state;
        }
      });
      let membersArrayLength = state.memberDetails.length;
      return {
        ...state,
        groupMembers: membersArrayLength,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default groupExpenseReducer;
