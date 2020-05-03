import { GROUP_EXPENSE_CONSTANTS } from '../store/storeConstants';

const { CREATE_GROUP, ADD_MEMBER } = GROUP_EXPENSE_CONSTANTS;
export const createGroup = (groupData) => {
  return {
    type: CREATE_GROUP,
    payload: groupData,
  };
};

export const addMember = (memberData) => {
  return {
    type: ADD_MEMBER,
    payload: memberData,
  };
};
