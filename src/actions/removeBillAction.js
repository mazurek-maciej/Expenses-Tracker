export const removeBillAction = id => {
  return {
    type: 'REMOVE_BILL',
    payload: id,
  };
};
