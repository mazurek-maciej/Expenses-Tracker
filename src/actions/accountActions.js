import account from '../apis/account';

export const createWallet = (userId, amount) => async dispatch => {
  const response = await account.post('/wallets', { userId, amount });

  dispatch({ type: 'CREATE_WALLET', payload: response.data });
};

export const editWallet = (userId, amount) => async dispatch => {
  const response = await account.patch(`/wallets?${userId}`, {
    userId,
    amount,
  });

  dispatch({ type: 'EDIT_WALLET', payload: response.data });
};

export const fetchWallet = userId => async dispatch => {
  const response = await account.get(`/wallets?${userId}`);

  dispatch({ type: 'FETCH_WALLET', payload: response.data });
};
