const initialState = [
  {
    id: 1,
    description: 'test',
    money: '20',
    category: '',
    financeType: 'Income',
    date: '1/2/2019',
    editable: false,
  },
];
export const incomeOutcomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FINANCE':
      console.log('bill added successfuly');
      return [...state, action.finance];
    case 'REMOVE_BILL':
      console.log('bill removed successfuly');
      return state.filter(bill => bill.id !== action.id);
    case 'EDIT_BILL':
      console.log('bill edit successfuly');
      return state.map(bill =>
        bill.id === action.id ? {...bill, editable: !bill.editable} : bill,
      );
    case 'UPDATE_BILL':
      console.log(action);
      console.log('bill updated successfuly');
      const newBillsArray = state.map(bill => {
        if (bill.id === action.updatedFinance.id) {
          bill = {
            ...bill,
            description: action.updatedFinance.description,
            date: action.updatedFinance.date,
            money: action.updatedFinance.money,
            category: action.updatedFinance.category,
            financeType: bill.financeType,
            editable: !bill.editable,
          };
        }
        return bill;
      });
      return newBillsArray;
    default:
      return state;
  }
};
