import account from '../apis/account';
import {
  CREATE_CATEGORY,
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  DELETE_CATEGORY,
} from './types';

export const createCategory = formValues => async dispatch => {
  const response = await account.post('/categories', { ...formValues });

  dispatch({ type: CREATE_CATEGORY, payload: response.data });
};

export const fetchCategory = id => async dispatch => {
  const response = await account.get(`/categories/${id}`);

  dispatch({ type: FETCH_CATEGORY, payload: response.data });
};

export const fetchCategories = () => async dispatch => {
  const response = await account.get('/categories');

  dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};

export const deleteCategory = id => async dispatch => {
  await account.delete(`/categories/${id}`);

  dispatch({ type: DELETE_CATEGORY, payload: id });
};
