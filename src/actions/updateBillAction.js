export const updateBillAction = (id, description, date, amountOfMoney) => {
  return {
    type: 'UPDATE_BILL',
    payload: id,
    description,
    date,
    amountOfMoney,
  };
};
