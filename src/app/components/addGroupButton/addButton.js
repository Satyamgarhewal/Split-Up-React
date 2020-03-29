import React from 'react';
import addButton from './addButton.css';
function AddButton(props) {
  return (
    <div>
      <input
        type="button"
        className="addButton"
        value="+"
        onClick={props.handleAddClick}
      />
    </div>
  );
}

export default AddButton;
