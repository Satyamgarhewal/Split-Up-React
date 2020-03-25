import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import indivdualExpenseReducer from '../reducers/individualExpenseReducer';
import userReducer from '../reducers/userReducer';
const configureStore = () => {
  const store = createStore(
    combineReducers({
      individualExpense: indivdualExpenseReducer,
      userData: userReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
