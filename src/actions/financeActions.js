import account from '../apis/account';
import {
  CREATE_FINANCE,
  EDIT_FINANCE,
  FETCH_FINANCES,
  FETCH_FINANCE,
  DELETE_FINANCE,
} from './types';
import history from '../routes/history';

export const createFinance = (formValues, userId) => async dispatch => {
  const response = await account.post('/finances', { ...formValues, userId });

  dispatch({ type: CREATE_FINANCE, payload: response.data });
  history.push('/');
};

export const fetchFinance = (firebaseId, id) => async dispatch => {
  const response = await account.get(`/users/find/${firebaseId}/${id}`);

  dispatch({ type: FETCH_FINANCE, payload: response.data });
};

export const fetchFinances = () => async dispatch => {
  const response = await account.get(
    '/users/find/H3iqZo24gyR0QbiZ1LUf658uttB3'
  );

  dispatch({ type: FETCH_FINANCES, payload: response.data.finances });
};

export const deleteFinance = (firebaseId, id) => async dispatch => {
  await account.post(`/users/del/${firebaseId}/${id}`);

  dispatch({ type: DELETE_FINANCE, payload: id });
};

export const editFinance = (id, formValues) => async dispatch => {
  const response = await account.patch(`/finances/${id}`, formValues);

  dispatch({ type: EDIT_FINANCE, payload: response.data });
  history.push('/');
};
