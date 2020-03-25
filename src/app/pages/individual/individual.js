import React, { Component } from 'react';
import { connect } from 'react-redux';
import individual from './individual.css';
import ExpenseCard from '../../components/expense-card/expensecard';
import Navbar from '../../components/navbar/navbar';
import IndividualExpenseForm from '../../components/individualExpenseForm/individualExpenseForm';
class Individual extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-md-8">
            <ExpenseCard />
          </div>
          <div className="col-md-4">
            <IndividualExpenseForm />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Individual);
