import { INDIVIDUAL_EXPENSE_CONSTANTS } from '../store/storeConstants';

const { ADD_INDIVIDUAL_EXPENSE_DATA } = INDIVIDUAL_EXPENSE_CONSTANTS;

const INDIVIDUAL_EXPENSE = {
  partnerData: [],
  expenseName: '',
  expenseMobile: '',
  expenseAmount: '',
};
const indivdualExpenseReducer = (state = INDIVIDUAL_EXPENSE, action) => {
  switch (action.type) {
    case ADD_INDIVIDUAL_EXPENSE_DATA: {
      return {
        ...state,
        expenseName: action.payload.name,
        expenseAmount: action.payload.amount,
      };
    }
    default: {
      return state;
    }
  }
};

export default indivdualExpenseReducer;
