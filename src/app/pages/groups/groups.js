// libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import SplitUpStrings from '../../utils/splitUpStrings';
import Navbar from '../../components/navbar/navbar';
import AddButton from '../../components/addGroupButton/addButton';
import ModalComponent from '../../components/modal/modal';
import GroupExpenseCard from '../../components/groupExpenseCard/groupExpenseCard';
// css
import groups from './groups.css';

// utils
const { GROUP, NO_RECORDS_FOUND, ADD_DETAILS_MODAL } = SplitUpStrings;

class Group extends Component {
  constructor() {
    super();
    this.state = {
      pageName: GROUP,
      isClicked: false,
      isAddDetailModalOpen: false,
      modalName: ADD_DETAILS_MODAL,
    };
  }
  handleAddButton = () => {
    this.setState({ isClicked: true });
  };
  handleAddDetailsModal = (value) => {
    this.setState({ isAddDetailModalOpen: value });
  };
  handleCloseModal = () => {
    this.setState({ isClicked: false, isAddDetailModalOpen: false });
  };
  render() {
    const groupData = this.props.groupData;
    return (
      <React.Fragment>
        {this.state.isClicked ? (
          <ModalComponent
            toggle={this.state.isClicked}
            modalControl={this.handleCloseModal}
            pageName={this.state.pageName}
          />
        ) : null}
        {this.state.isAddDetailModalOpen ? (
          <ModalComponent
            toggle={this.state.isAddDetailModalOpen}
            modalControl={this.handleCloseModal}
            pageName={this.state.modalName}
          />
        ) : null}
        <Navbar />
        {!groupData.groupName ? (
          <p className="noRecordFound">{NO_RECORDS_FOUND}</p>
        ) : null}
        {groupData.groupName ? (
          <GroupExpenseCard
            expenseName={groupData.groupName}
            expenseMembers={groupData.groupMembers}
            memberDetails={groupData.memberDetails}
            pageName={GROUP}
            totalAmount={groupData.totalAmount}
            addDetailModal={this.handleAddDetailsModal}
          />
        ) : null}
        <AddButton
          pageName={this.state.pageName}
          handleAddClick={this.handleAddButton}
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
export default connect(mapStateToProps)(Group);
