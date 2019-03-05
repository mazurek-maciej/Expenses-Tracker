export const updateBillAction = (
  id,
  description,
  date,
  amountOfMoney,
  category,
) => {
  return {
    type: 'UPDATE_BILL',
    id,
    description,
    date,
    amountOfMoney,
    category,
  };
};
