import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import indivdualExpenseReducer from '../reducers/individualExpenseReducer';
const configureStore = () => {
  const store = createStore(
    combineReducers(
      {
        individualExpense: indivdualExpenseReducer
      },
      applyMiddleware(thunk)
    )
  );
  return store;
};

export default configureStore;
