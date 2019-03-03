import {combineReducers} from 'redux';

const initialState = [];

const billsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BILL':
      return [...state, action.payload];
    case 'REMOVE_BILL':
      return state.filter(bill => bill.id !== action.payload);
    case 'EDIT_BILL':
      return state.map(bill =>
        bill.id === action.payload ? {...bill, editable: !bill.editable} : bill,
      );
    case 'UPDATE_BILL':
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

const reducers = combineReducers({
  bills: billsReducers,
});

export default reducers;
