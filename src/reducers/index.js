import {combineReducers} from 'redux';

const initialState = [];

const billsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BILL':
      return [...state, action.payload];
    case 'REMOVE_BILL':
      return state.filter(bill => bill.id !== action.payload);
    default:
      return state;
  }
};

const reducers = combineReducers({
  bills: billsReducers,
});

export default reducers;
