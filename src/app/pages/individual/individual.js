// libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import Navbar from '../../components/navbar/navbar';
import AddButton from '../../components/addGroupButton/addButton';
import IndividualExpenseForm from '../../components/individualExpenseForm/individualExpenseForm';
import ModalComponent from '../../components/modal/modal';
import IndividualExpenseCard from '../../components/individualExpense-card/IndividualExpenseCard';
// css
import individual from './individual.css';

// utils
import SplitUpStrings from '../../utils/splitUpStrings';

const { INDIVIDUAL } = SplitUpStrings;
class Individual extends Component {
  constructor() {
    super();
    this.state = {
      pageName: INDIVIDUAL,
      isClicked: false,
    };
  }
  handleAddButton = (e) => {
    this.setState({ isClicked: true });
  };
  handleCloseModal = (e) => {
    this.setState({ isClicked: e });
  };
  render() {
    const individualExpenseData = this.props.individualExpense;
    return (
      <div>
        {this.state.isClicked ? (
          <ModalComponent
            toggle={this.state.isClicked}
            modalControl={this.handleCloseModal}
            pageName={this.state.pageName}
          />
        ) : null}
        <Navbar />
        {individualExpenseData.expenseName ? (
          <IndividualExpenseCard
            pageName={INDIVIDUAL}
            expenseName={individualExpenseData.expenseName}
          />
        ) : null}
        <AddButton
          pageName={this.state.pageName}
          handleAddClick={this.handleAddButton}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    individualExpense: state.individualExpense,
  };
};
export default connect(mapStateToProps)(Individual);
