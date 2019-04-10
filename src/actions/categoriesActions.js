import account from '../apis/account';
import {
  CREATE_CATEGORY,
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  DELETE_CATEGORY,
} from './types';
import history from '../routes/history';

export const createCategory = (formValues, firebaseId) => async dispatch => {
  const response = await account.post(`/users/addCategory/${firebaseId}`, {
    ...formValues,
  });

  dispatch({ type: CREATE_CATEGORY, payload: response.data });
  history.push('/');
};

export const fetchCategory = id => async dispatch => {
  const response = await account.get(`/categories/${id}`);

  dispatch({ type: FETCH_CATEGORY, payload: response.data });
};

export const fetchCategories = firebaseId => async dispatch => {
  const response = await account.get(`/users/categories/${firebaseId}`);

  dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};

export const deleteCategory = id => async dispatch => {
  await account.delete(`/categories/${id}`);

  dispatch({ type: DELETE_CATEGORY, payload: id });
};
