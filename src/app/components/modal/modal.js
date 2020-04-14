import React from 'react';
import modal from './modal.css';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SplitUpStrings from '../../utils/splitUpStrings';
import IndividualExpenseForm from '../individualExpenseForm/individualExpenseForm';
import GroupExpenseForm from '../groupExpenseForm/groupExpenseForm';
const { INDIVIDUAL, GROUP } = SplitUpStrings;
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
          {props.pageName === INDIVIDUAL ? 'Add an expense' : 'Create a group'}
        </ModalHeader>
        <ModalBody>
          {props.pageName === INDIVIDUAL ? <IndividualExpenseForm /> : null}
          {props.pageName === GROUP ? (
            <GroupExpenseForm handleModalClose={handleClose} />
          ) : null}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;
