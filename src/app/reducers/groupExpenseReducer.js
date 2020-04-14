import { GROUP_EXPENSE_CONSTANTS } from '../store/storeConstants';

const { CREATE_GROUP } = GROUP_EXPENSE_CONSTANTS;

let groupData = {
  groupName: '',
  groupMembers: 0,
  memberNames: [],
  totalAmount: 0,
};
const groupExpenseReducer = (state = groupData, action) => {
  switch (action.type) {
    case CREATE_GROUP: {
      const key = Object.keys(action.payload);
      const value = action.payload[key];
      return {
        ...state,
        groupName: value,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default groupExpenseReducer;
