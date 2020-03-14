import individualExpenseConstants from '../utils/constants';
import stateConstants from '../utils/stateConstants';
const { ADD_EXPENSE } = individualExpenseConstants;
const individualExpenseData = stateConstants;
const indivdualExpenseReducer = (state = individualExpenseData, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expenseName: action.payload.name,
        expenseAmount: action.payload.amount
      };
    }
    default: {
      return [...state];
    }
  }
};

export default indivdualExpenseReducer;
