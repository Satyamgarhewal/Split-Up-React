// libraries
import React, { Components, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// action
import { addMember } from '../../actions/groupExpenseAction';
// css
import groupDetail from './groupDetail.css';

// utils
import SplitUpStrings from '../../utils/splitUpStrings';

const { ADD, CLOSE, FIELD_EMPTY_ERROR } = SplitUpStrings;

class GroupDetailForm extends Component {
  constructor() {
    super();
    this.state = {
      memberName: '',
      memberNumber: '',
      memberAmount: '',
      isNumberFieldEmpty: false,
      isNameFieldEmpty: false,
    };
  }
  handleMemberNameChange = (e) => {
    const re = /^[a-zA-Z,.'":;~`!@#$%^&*()?-_ ]*$/;
    if (
      e.target.value === '' ||
      (re.test(e.target.value) && e.target.value.length <= 12)
    ) {
      const memberName = e.target.value;
      this.setState({ memberName }, () => {
        if (this.state.memberName) {
          this.setState({ isNameFieldEmpty: false });
        }
      });
    }
  };
  handleMemberNumberChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (
      e.target.value === '' ||
      (re.test(e.target.value) && e.target.value.length <= 10)
    ) {
      const memberNumber = e.target.value;
      this.setState({ memberNumber }, () => {
        if (this.state.memberNumber) {
          this.setState({ isNumberFieldEmpty: false });
        }
      });
    }
  };
  handleMemberAmountChange = (e) => {};
  handleAddMember = () => {
    if (this.state.memberName) {
      if (this.state.memberNumber) {
        const memberData = {
          memberName: this.state.memberName,
          memberNumber: this.state.memberNumber,
        };
        this.props.addMember(memberData);
        this.setState({
          memberName: '',
          memberNumber: '',
        });
      } else {
        this.setState({ isNumberFieldEmpty: true });
      }
    } else {
      this.setState({ isNameFieldEmpty: true });
    }
  };
  handleCloseModal = () => {
    this.props.handleModalClose(false, 'closePopup');
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          className="groupDetailFormField"
          value={this.state.memberName}
          onChange={this.handleMemberNameChange}
          placeholder="Name"
        />
        {this.state.isNameFieldEmpty ? (
          <p className="groupDetailformEmptyField">{FIELD_EMPTY_ERROR}</p>
        ) : null}
        <input
          type="text"
          className="groupDetailFormField"
          value={this.state.memberNumber}
          onChange={this.handleMemberNumberChange}
          placeholder="Mobile Number"
        />
        {this.state.isNumberFieldEmpty ? (
          <p className="groupDetailformEmptyField">{FIELD_EMPTY_ERROR}</p>
        ) : null}

        <input
          type="button"
          className="groupDetailFormButton"
          value={ADD}
          onClick={this.handleAddMember}
        />
        <input
          type="button"
          className="groupDetailFormButton"
          value={CLOSE}
          onClick={this.handleCloseModal}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groupData: state.groupData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMember: bindActionCreators(addMember, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupDetailForm);
