import React from 'react';
import groupExpenseForm from './groupExpenseForm.css';
import SplitUpStrings from '../../utils/splitUpStrings';
const { FIELD_EMPTY_ERROR } = SplitUpStrings;

class GroupExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      groupName: '',
      isFieldEmpty: false
    };
  }
  handleGroupName = e => {
    this.setState({ groupName: e.target.value });
    if (this.state.groupName !== '') {
      this.setState({ isFieldEmpty: false });
    }
  };
  handleGroupCreateClick = e => {
    this.setState({ groupName: '' }, () => {
      if (this.state.groupName === '') {
        this.setState({ isFieldEmpty: true });
      }
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            className="groupFormField"
            placeholder="Group name"
            value={this.state.groupName}
            onChange={this.handleGroupName}
          />
          {this.state.isFieldEmpty ? (
            <p className="groupformEmptyField">{FIELD_EMPTY_ERROR}</p>
          ) : null}
          <input
            type="button"
            className="groupFormButton"
            value="Create"
            onClick={this.handleGroupCreateClick}
          />
        </form>
      </div>
    );
  }
}

export default GroupExpenseForm;
