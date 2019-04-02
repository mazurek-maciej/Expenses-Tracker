import account from '../apis/account';

export const createAccountValet = (userId, amount) => async dispatch => {
  const response = await account.post('/users', { userId, amount });

  dispatch({ type: 'CREATE_FINANCE_ACCOUNT', payload: response.data });
};
export const editAccountValet = (userId, amount) => async dispatch => {
  const response = await account.post('/users', { userId, amount });

  dispatch({ type: 'EDIT_FINANCE_ACCOUNT', payload: response.data });
};
