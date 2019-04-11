import account from '../apis/account';
import { CREATE_WALLET, FETCH_WALLET, EDIT_WALLET } from './types';

export const createWallet = (userId, amount) => async dispatch => {
  const response = await account.post('/wallets', { userId, amount });

  dispatch({ type: CREATE_WALLET, payload: response.data });
};

export const editWallet = (firebaseId, value) => async dispatch => {
  const response = await account.patch(`/users/wallets/edit/${firebaseId}`, {
    ...value,
  });

  dispatch({ type: EDIT_WALLET, payload: response.data });
};

export const fetchWallet = firebaseId => async dispatch => {
  const response = await account.get(`/users/wallets/${firebaseId}`);

  dispatch({ type: FETCH_WALLET, payload: response.data });
};
