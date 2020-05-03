// libraries
import React, { useState } from 'react';

// css
import groupCard from './groupCard.css';

// utils
import SplitUpStrings from '../../utils/splitUpStrings';

const {
  GROUP_MEMBERS,
  GROUP_MEMBER_NAMES,
  TOTAL_AMOUNT,
  ADD_DETAILS,
  PAID_BY,
  DIVIDE,
  DIVIDE_EQUALLY,
  DIVIDE_UNEQUALLY,
} = SplitUpStrings;
const title = (name) => {
  let new_arr = name.split(' ');
  let new_title = '';
  for (let i = 0; i < new_arr.length; i++) {
    if (new_arr[i] !== '') {
      new_title +=
        new_arr[i][0].toUpperCase() + new_arr[i].slice(1).toLowerCase() + ' ';
    }
  }
  return new_title;
};
const splitAmount = (totalAmount, memberDetails) => {
  return Math.round(totalAmount / memberDetails.length, 2);
};
function handleSelectChange(e) {}
function GroupExpenseCard(props) {
  const [isEqual, setIsEqual] = useState(true);
  function handleModalOpen() {
    props.addDetailModal(true);
  }
  return (
    <React.Fragment>
      <div className="groupCard">
        <div className="groupContainer">
          <p className="groupHeading">{title(props.expenseName)}</p>
          <p className="groupMemberHeading">
            {GROUP_MEMBERS + ' ~ ' + props.expenseMembers}
          </p>
          <p className="groupMemberHeading">{GROUP_MEMBER_NAMES + ' ~ '}</p>

          {props.memberDetails.map((member) => {
            return isEqual ? (
              <h6 className="membersStyling">
                {title(member.memberName) +
                  ' ~ ' +
                  splitAmount(props.totalAmount, props.memberDetails)}
              </h6>
            ) : null;
          })}

          {props.memberDetails.length === 0 ? (
            <div>
              <input
                type="button"
                className="addDetailsButton"
                value={ADD_DETAILS}
                onClick={handleModalOpen}
              />
            </div>
          ) : (
            <div>
              <p className="paidByHeading">
                {PAID_BY + ' '}
                <select id="members" name="members" className="membersDropdown">
                  {props.memberDetails.map((member, index) => {
                    return (
                      <option
                        className="membersDropdownContent"
                        value={member.memberName}
                        id={index}
                        key={index}
                        onChange={handleSelectChange}
                      >
                        {title(member.memberName)}
                      </option>
                    );
                  })}
                </select>
              </p>
              <p className="paidByHeading">{DIVIDE + ' ~ '}</p>
              <select id="division" name="division">
                <option id="1">{DIVIDE_EQUALLY}</option>
                <option id="2">{DIVIDE_UNEQUALLY}</option>
              </select>
            </div>
          )}

          <div>
            <hr className="totalAmountBorder" />
          </div>
          <div className="totalAmountHeading">
            {TOTAL_AMOUNT + ' ~ ' + props.totalAmount}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GroupExpenseCard;
