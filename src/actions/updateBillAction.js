export const updateBillAction = (id, description, date, amountOfMoney) => {
  return {
    type: 'UPDATE_BILL',
    id,
    description,
    date,
    amountOfMoney,
  };
};
