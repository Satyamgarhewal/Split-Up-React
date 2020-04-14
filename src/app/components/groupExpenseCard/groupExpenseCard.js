// libraries
import React from 'react';

// css
import groupCard from './groupCard.css';

// utils
import SplitUpStrings from '../../utils/splitUpStrings';

const { GROUP_MEMBERS, GROUP_MEMBER_NAMES, TOTAL_AMOUNT } = SplitUpStrings;
function GroupExpenseCard(props) {
  return (
    <React.Fragment>
      <div className="groupCard">
        <div className="groupContainer">
          <div className="groupHeading">
            {props.expenseName[0].toUpperCase() +
              props.expenseName.slice(1).toLowerCase()}
          </div>
          <div className="groupMemberHeading">
            {GROUP_MEMBERS + ' ~ ' + props.expenseMembers}
          </div>
          <div className="groupMemberHeading">{GROUP_MEMBER_NAMES + ' ~ '}</div>
          <div>
            <hr className="totalAmountBorder" />
          </div>
          <div className="totalAmountHeading">
            {TOTAL_AMOUNT + ' ~ ' + props.totalAmount}
          </div>
          <div>
            <input
              type="button"
              className="addDetailsButton"
              value="Add Details"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GroupExpenseCard;
