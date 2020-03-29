import React, { Component } from 'react';
import { connect } from 'react-redux';
import SplitUpStrings from '../../utils/splitUpStrings';
import Navbar from '../../components/navbar/navbar';
import AddButton from '../../components/addGroupButton/addButton';
import ModalComponent from '../../components/modal/modal';
const { GROUP } = SplitUpStrings;

class Group extends Component {
  constructor() {
    super();
    this.state = {
      pageName: GROUP,
      isClicked: false
    };
  }
  handleAddButton = e => {
    this.setState({ isClicked: true });
  };
  handleCloseModal = e => {
    this.setState({ isClicked: false });
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
        <AddButton
          pageName={this.state.pageName}
          handleAddClick={this.handleAddButton}
        />
      </div>
    );
  }
}

export default connect()(Group);
