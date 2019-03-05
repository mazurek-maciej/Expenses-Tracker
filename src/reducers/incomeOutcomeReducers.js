const initialState = [
  {
    description: 'test',
    amountOfMoney: '20',
    date: '1/2/2019',
    editable: false,
    category: '',
    type: '',
  },
];
export const incomeOutcomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BILL':
      console.log('bill added successfuly');
      return [...state, action.bill];
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
        if (bill.id === action.id) {
          bill = {
            ...bill,
            description: action.description,
            date: action.date,
            amountOfMoney: action.amountOfMoney,
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
