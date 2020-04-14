import { GROUP_EXPENSE_CONSTANTS } from '../store/storeConstants';

const { CREATE_GROUP } = GROUP_EXPENSE_CONSTANTS;
export const createGroup = (groupData) => {
  return {
    type: CREATE_GROUP,
    payload: groupData,
  };
};
