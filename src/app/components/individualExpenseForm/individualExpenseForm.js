import React, { Component } from 'react';
import { connect } from 'react-redux';
import SplitUpStrings from '../../utils/splitUpStrings';
import ModalComponent from '../modal/modal';
import individualExpenseForm from './individualExpenseForm.css';
import { bindActionCreators } from 'redux';
import { addExpense } from '../../actions/individualExpenseAction';
const { FIELD_EMPTY_ERROR } = SplitUpStrings;

class IndividualExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amount: '',
      mobile: '',
      isModalOpen: false,
      isNameFieldEmpty: false,
      isMobileFieldEmpty: false,
      isAmountFieldEmpty: false
    };
  }
  handleNameChange = e => {
    const name = e.target.value;
    this.setState({ name }, () => {
      if (this.state.name !== '') {
        this.setState({ isNameFieldEmpty: false });
      }
    });
  };
  handleMobileChange = e => {
    const re = /^[0-9\b]+$/;
    if (
      e.target.value === '' ||
      (re.test(e.target.value) && e.target.value.length <= 10)
    ) {
      this.setState({ mobile: e.target.value }, () => {
        if (this.state.mobile !== '') {
          this.setState({ isMobileFieldEmpty: false });
        }
      });
    }
  };
  handleMoneyChange = e => {
    const re = /^[0-9\b]+$/;
    if (
      e.target.value === '' ||
      (re.test(e.target.value) && e.target.value.length <= 7)
    ) {
      this.setState({ amount: e.target.value }, () => {
        if (this.state.amount !== '') {
          this.setState({ isAmountFieldEmpty: false });
        }
      });
    }
  };
  handleBorrowClick = e => {
    if (this.state.name === '') {
      this.setState({ isNameFieldEmpty: true });
    }
    if (this.state.mobile === '') {
      this.setState({ isMobileFieldEmpty: true });
    }
    if (this.state.amount === '') {
      this.setState({ isAmountFieldEmpty: true });
    }
    if (
      this.state.name !== '' &&
      this.state.mobile !== '' &&
      this.state.amount !== ''
    ) {
      const userData = {
        name: this.state.name,
        mobile: this.state.mobile,
        amount: this.state.amount,
        activity: 'Borrows'
      };
      this.props.addExpense(userData);
    }
  };

  handelOweClick = e => {
    if (this.state.name === '') {
      this.setState({ isNameFieldEmpty: true });
    }
    if (this.state.mobile === '') {
      this.setState({ isMobileFieldEmpty: true });
    }
    if (this.state.amount === '') {
      this.setState({ isAmountFieldEmpty: true });
    }
    if (
      this.state.name !== '' &&
      this.state.mobile !== '' &&
      this.state.amount !== ''
    ) {
      const userData = {
        name: this.state.name,
        mobile: this.state.mobile,
        amount: this.state.amount,
        activity: 'Owes'
      };
      this.props.addExpense(userData);
    }
  };
  handleCloseModal = e => {
    this.setState({ isModalOpen: e });
  };
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
            {this.state.isNameFieldEmpty ? (
              <p className="expenseFormFieldEmptyError">{FIELD_EMPTY_ERROR}</p>
            ) : null}
            <input
              type="text"
              className="expenseFormField "
              placeholder="Mobile number"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleMobileChange}
            />
            {this.state.isMobileFieldEmpty ? (
              <p className="expenseFormFieldEmptyError">{FIELD_EMPTY_ERROR}</p>
            ) : null}

            <input
              type="text"
              className="expenseFormField"
              placeholder="Transaction Amount"
              name="amount"
              value={this.state.amount}
              onChange={this.handleMoneyChange}
            />
            {this.state.isAmountFieldEmpty ? (
              <p className="expenseFormFieldEmptyError">{FIELD_EMPTY_ERROR}</p>
            ) : null}

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

const mapDispatchToProps = dispatch => {
  return {
    addExpense: bindActionCreators(addExpense, dispatch)
  };
};
export default connect(null, mapDispatchToProps)(IndividualExpenseForm);
