import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalComponent from '../modal/modal';
import individualExpenseForm from './individualExpenseForm.css';
class IndividualExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amount: '',
      isModalOpen: false
    };
  }
  handleNameChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };
  handleMoneyChange = e => {
    const re = /^[0-9\b]+$/;
    if (
      e.target.value === '' ||
      (re.test(e.target.value) && e.target.value.length <= 7)
    ) {
      this.setState({ amount: e.target.value });
    }
  };
  handleBorrowClick = e => {
    this.handleCloseModal(true);
  };
  handleCloseModal = e => {
    this.setState({ isModalOpen: e });
  };
  handelOweClick = e => {};
  render() {
    return (
      <div>
        {this.state.isModalOpen ? (
          <ModalComponent
            toggle={this.state.isModalOpen}
            modalControl={this.handleCloseModal}
          />
        ) : null}
        <div className="expenseFormContainer">
          <form>
            <input
              type="text"
              className="expenseFormField "
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <input
              type="text"
              className="expenseFormField"
              placeholder="Transaction Amount"
              name="amount"
              value={this.state.amount}
              onChange={this.handleMoneyChange}
            />
            <input
              type="button"
              className="expenseFormButton"
              name="Borrow"
              value="Borrow"
              onClick={this.handleBorrowClick}
            />
            <input
              type="button"
              className="expenseFormButton"
              name="owes"
              value="Owes"
              onClick={this.handelOweClick}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(IndividualExpenseForm);
