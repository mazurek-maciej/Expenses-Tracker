import {combineReducers} from 'redux';

const initialState = [];

const addBill = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BILL':
      return [...state, action.payload];
    default:
      return state;
  }
};

const reducers = combineReducers({
  addBill: addBill,
});

export default reducers;
