import React from 'react';
import modal from './modal.css';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function ModalComponent(props) {
  const { toggle, modalControl } = props;
  function handleClose() {
    console.log('handleClose');
    if (props.modalControl) {
      modalControl(false);
    }
  }
  return (
    <div>
      <Modal isOpen={toggle}>
        <ModalHeader>Your Expense is added</ModalHeader>
        <ModalBody>This is modal body</ModalBody>
        <ModalFooter>
          <input
            type="button"
            name="OK"
            value="Close"
            className="modalButton"
            onClick={handleClose}
          />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;
