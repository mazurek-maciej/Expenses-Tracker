import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_WALLET':
      return {
        ...state,
        id: action.userId,
        amount: action.amount,
      };
    case 'EDIT_WALLET':
      return {
        ...state,
        amount: action.amount,
      };
    case 'FETCH_WALLET':
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id'),
      };
    default:
      return state;
  }
};
