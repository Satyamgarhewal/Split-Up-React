import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseCard from '../../components/expense-card/expensecard';

class Individual extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ExpenseCard />
      </div>
    );
  }
}

export default connect()(Individual);
