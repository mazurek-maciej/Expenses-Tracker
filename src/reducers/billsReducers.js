const initialState = [];
export const billsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BILL':
      console.log('bill added successfuly');
      return [...state, action.payload];
    case 'REMOVE_BILL':
      console.log('bill removed successfuly');
      return state.filter(bill => bill.id !== action.payload);
    case 'EDIT_BILL':
      console.log('bill edit successfuly');
      return state.map(bill =>
        bill.id === action.payload ? {...bill, editable: !bill.editable} : bill,
      );
    case 'UPDATE_BILL':
      console.log('bill updated successfuly');
      const newBillsArray = state.map(bill => {
        if (bill.id === action.payload) {
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
