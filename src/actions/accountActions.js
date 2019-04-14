import account from '../apis/account';
import { CREATE_WALLET, FETCH_WALLETS, EDIT_WALLET } from './types';
import history from '../routes/history';

export const createWallet = (firebaseId, wallet) => async dispatch => {
  const response = await account.post(`/users/wallets/${firebaseId}`, {
    ...wallet,
  });

  dispatch({ type: CREATE_WALLET, payload: response.data });
  history.push('/');
};

export const editWallet = (firebaseId, value) => async dispatch => {
  const response = await account.patch(`/users/wallets/${firebaseId}`, {
    ...value,
  });

  dispatch({ type: EDIT_WALLET, payload: response.data });
};

export const fetchWallets = firebaseId => async dispatch => {
  const response = await account.get(`/users/wallets/${firebaseId}`);

  dispatch({ type: FETCH_WALLETS, payload: response.data.wallets });
};
