import _ from 'lodash';
import { CREATE_WALLET, FETCH_WALLET, EDIT_WALLET } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_WALLET:
      return {
        ...state,
        id: action.userId,
        amount: action.amount,
      };
    case EDIT_WALLET:
      return {
        ...state,
        wallet: action.payload.wallet,
      };
    case FETCH_WALLET:
      return {
        ...state,
        wallets: action.payload.wallets,
      };
    default:
      return state;
  }
};
