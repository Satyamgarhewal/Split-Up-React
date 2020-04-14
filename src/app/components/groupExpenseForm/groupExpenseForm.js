import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import groupExpenseForm from './groupExpenseForm.css';
import SplitUpStrings from '../../utils/splitUpStrings';
import { createGroup } from '../../actions/groupExpenseAction';

const { FIELD_EMPTY_ERROR } = SplitUpStrings;

class GroupExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      groupName: '',
      isFieldEmpty: false,
    };
  }
  handleGroupName = (e) => {
    this.setState({ groupName: e.target.value });
    if (this.state.groupName !== '') {
      this.setState({ isFieldEmpty: false });
    }
  };
  handleGroupCreateClick = (e) => {
    e.preventDefault();
    if (this.state.groupName === '') {
      this.setState({ isFieldEmpty: true });
    } else {
      const groupName = {
        groupName: this.state.groupName,
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
const mapDispatchToProps = (dispatch) => {
  return {
    addGroupName: bindActionCreators(createGroup, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(GroupExpenseForm);
