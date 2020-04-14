import React from 'react';
import IndividualCard from './IndividualCard.css';
function IndividualExpenseCard(props) {
  return (
    <div>
      <div className="IndividualCard">
        <div className="IndividualContainer">
          <div className="IndividualHeading">{props.expenseName}</div>
        </div>
      </div>
    </div>
  );
}

export default IndividualExpenseCard;
