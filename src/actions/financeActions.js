import account from '../apis/account';
import {
  CREATE_FINANCE,
  EDIT_FINANCE,
  FETCH_FINANCES,
  FETCH_FINANCE,
  DELETE_FINANCE,
} from './types';
import history from '../routes/history';

export const createFinance = (formValues, firebaseId) => async dispatch => {
  const response = await account.post(`/users/add/${firebaseId}`, {
    ...formValues,
  });

  dispatch({ type: CREATE_FINANCE, payload: response.data });
  history.push('/');
};

export const fetchFinance = (firebaseId, id) => async dispatch => {
  const response = await account.get(`/users/find/${firebaseId}/${id}`);

  dispatch({ type: FETCH_FINANCE, payload: response.data });
};

export const fetchFinances = firebaseId => async dispatch => {
  const response = await account.get(`/users/find/${firebaseId}`);

  dispatch({ type: FETCH_FINANCES, payload: response.data.finances });
};

export const deleteFinance = (firebaseId, id) => async dispatch => {
  await account.delete(`/users/del/${firebaseId}/${id}`);

  dispatch({ type: DELETE_FINANCE, payload: id });
};

export const editFinance = (id, formValues) => async dispatch => {
  const response = await account.patch(`/users/edit/${id}`, { ...formValues });

  dispatch({ type: EDIT_FINANCE, payload: response.data });
  history.push('/');
};
