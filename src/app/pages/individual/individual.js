import React, { Component } from 'react';
import { connect } from 'react-redux';
import SplitUpStrings from '../../utils/splitUpStrings';
import individual from './individual.css';
import ExpenseCard from '../../components/expense-card/expensecard';
import Navbar from '../../components/navbar/navbar';
import AddButton from '../../components/addGroupButton/addButton';
import IndividualExpenseForm from '../../components/individualExpenseForm/individualExpenseForm';
import ModalComponent from '../../components/modal/modal';

const { INDIVIDUAL } = SplitUpStrings;
class Individual extends Component {
  constructor() {
    super();
    this.state = {
      pageName: INDIVIDUAL,
      isClicked: false
    };
  }
  handleAddButton = e => {
    this.setState({ isClicked: true });
  };
  handleCloseModal = e => {
    this.setState({ isClicked: e });
  };
  render() {
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
        <div className="row">
          <div className="col-md-10">
            <ExpenseCard />
          </div>
          <div className="col-md-2">
            <AddButton
              pageName={this.state.pageName}
              handleAddClick={this.handleAddButton}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Individual);
