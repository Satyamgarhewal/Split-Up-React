// libraries
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import groupExpenseForm from './groupExpenseForm.css';
import { createGroup } from '../../actions/groupExpenseAction';

// utils
import SplitUpStrings from '../../utils/splitUpStrings';

const { FIELD_EMPTY_ERROR, CREATE, TOTAL_AMOUNT, GROUP_NAME } = SplitUpStrings;

class GroupExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      groupName: '',
      totalAmount: '',
      isNameFieldEmpty: false,
      isAmountFieldEmpty: false,
    };
  }
  handleGroupName = (e) => {
    const re = /^[a-zA-Z,.'"$&@!()*%#?_ ]*$/;
    if (
      e.target.value === '' ||
      (re.test(e.target.value) && e.target.value.length <= 12)
    ) {
      this.setState({ groupName: e.target.value });
    }
    if (this.state.groupName !== '') {
      this.setState({ isFieldEmpty: false });
    }
  };
  handleTotalAmount = (e) => {
    const re = /^[0-9\b]+$/;
    if (
      e.target.value === '' ||
      (re.test(e.target.value) && e.target.value.length <= 7)
    ) {
      this.setState({ totalAmount: e.target.value });
    }
    if (this.state.totalAmount !== '') {
      this.setState({ isFieldEmpty: false });
    }
  };
  handleGroupCreateClick = (e) => {
    e.preventDefault();
    if (this.state.groupName === '') {
      this.setState({ isNameFieldEmpty: true });
    } else if (this.state.totalAmount === '') {
      this.setState({ isAmountFieldEmpty: true });
    } else {
      const groupName = {
        groupName: this.state.groupName,
        totalAmount: this.state.totalAmount,
      };
      this.props.addGroupName(groupName);
      this.props.handleModalClose(false, 'closePopup');
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleGroupCreateClick}>
          <input
            type="text"
            className="groupFormField"
            placeholder={GROUP_NAME}
            value={this.state.groupName}
            onChange={this.handleGroupName}
          />
          {this.state.isNameFieldEmpty ? (
            <p className="groupformEmptyField">{FIELD_EMPTY_ERROR}</p>
          ) : null}
          <input
            type="text"
            className="groupFormField"
            placeholder={TOTAL_AMOUNT}
            value={this.state.totalAmount}
            onChange={this.handleTotalAmount}
          />
          {this.state.isAmountFieldEmpty ? (
            <p className="groupformEmptyField">{FIELD_EMPTY_ERROR}</p>
          ) : null}
          <input
            type="button"
            className="groupFormButton"
            value={CREATE}
            onClick={this.handleGroupCreateClick}
          />
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addGroupName: bindActionCreators(createGroup, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(GroupExpenseForm);
