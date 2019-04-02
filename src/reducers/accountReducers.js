export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_FINANCE_ACCOUNT':
      return {
        ...state,
        id: action.userId,
        valet: action.amount,
      };
    case 'EDIT_FINANCE_ACCOUNT':
      return {
        ...state,
        id: action.userId,
        valet: action.amount,
      };
    default:
      return state;
  }
};
