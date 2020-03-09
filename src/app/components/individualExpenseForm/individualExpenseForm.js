import React, { Component } from 'react';
import { connect } from 'react-redux';
import individualExpenseForm from './individualExpenseForm.css';
class IndividualExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amount: ''
    };
  }
  handleNameChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };
  handleMoneyChange = e => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ amount: e.target.value }, () => {
        console.log(this.state.amount);
      });
    }
  };
  handleBorrowClick = e => {
    console.log('handle borrow clicked');
  };
  handelOweClick = e => {
    console.log('handle owe click');
  };
  render() {
    return (
      <div className="formContainer">
        <form>
          <input
            type="text"
            className="formField "
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            className="formField"
            placeholder="Transaction Amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleMoneyChange}
          />
          <input
            type="button"
            className="formButton"
            name="Borrow"
            value="Borrow"
            onClick={this.handleBorrowClick}
          />
          <input
            type="button"
            className="formButton"
            name="owes"
            value="Owes"
            onClick={this.handelOweClick}
          />
        </form>
      </div>
    );
  }
}

export default connect()(IndividualExpenseForm);
