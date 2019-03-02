export const editBillAction = id => {
  return {
    type: 'EDIT_BILL',
    payload: id,
  };
};
