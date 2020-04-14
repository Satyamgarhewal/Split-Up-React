import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import indivdualExpenseReducer from '../reducers/individualExpenseReducer';
import userReducer from '../reducers/userReducer';
import groupExpenseReducer from '../reducers/groupExpenseReducer';
const configureStore = () => {
  const store = createStore(
    combineReducers({
      individualExpense: indivdualExpenseReducer,
      userData: userReducer,
      groupData: groupExpenseReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
