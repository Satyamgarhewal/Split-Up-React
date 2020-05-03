// libraries
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// components
import SplitUpStrings from '../../utils/splitUpStrings';
import IndividualExpenseForm from '../individualExpenseForm/individualExpenseForm';
import GroupExpenseForm from '../groupExpenseForm/groupExpenseForm';
import GroupDetailForm from '../../components/groupDetailsForm/groupDetailsForm';
// css
import modal from './modal.css';

// utils
const {
  INDIVIDUAL,
  GROUP,
  ADD_DETAILS_MODAL,
  ADD_EXPENSE,
  CREATE_GROUP,
  ADD_GROUP_MEMBERS,
} = SplitUpStrings;

function ModalComponent(props) {
  const { toggle, modalControl } = props;
  function handleClose(modalClose, fieldValue) {
    if (props.modalControl) {
      modalControl(false);
    } else if (fieldValue && fieldValue === 'closePopup') {
      modalControl(modalClose);
    }
  }

  return (
    <div>
      <Modal className="modalEffect" isOpen={toggle}>
        <div className="offset-md-1">
          <button
            type="button"
            className="modalCloseButton"
            aria-label="Close"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <ModalHeader className="modalHeader">
          {props.pageName === INDIVIDUAL ? { ADD_EXPENSE } : null}
          {props.pageName === GROUP ? CREATE_GROUP : null}
          {props.pageName === ADD_DETAILS_MODAL ? ADD_GROUP_MEMBERS : null}
        </ModalHeader>
        <ModalBody>
          {props.pageName === INDIVIDUAL ? <IndividualExpenseForm /> : null}
          {props.pageName === GROUP ? (
            <GroupExpenseForm handleModalClose={handleClose} />
          ) : null}
          {props.pageName === ADD_DETAILS_MODAL ? (
            <GroupDetailForm handleModalClose={handleClose} />
          ) : null}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;
