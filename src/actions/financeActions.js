import account from "../apis/account";
import {
  CREATE_FINANCE,
  EDIT_FINANCE,
  FETCH_FINANCES,
  FETCH_FINANCE,
  DELETE_FINANCE
} from "./types";

export const createFinance = formValues => async dispatch => {
  const response = await account.post("/finances", formValues);

  dispatch({ type: CREATE_FINANCE, payload: response.data });
};

export const fetchFinance = id => async dispatch => {
  const response = await account.get(`/finances/${id}`);

  dispatch({ type: FETCH_FINANCE, payload: response.data });
};

export const fetchFinances = () => async dispatch => {
  const response = await account.get("/finances");

  dispatch({ type: FETCH_FINANCES, payload: response.data });
};

export const deleteFinance = id => async dispatch => {
  await account.delete(`/finances/${id}`);

  dispatch({ type: DELETE_FINANCE, payload: id });
};

export const editFinance = (id, formValues) => async dispatch => {
  const response = await account.put(`/finances/${id}`, formValues);

  dispatch({ type: EDIT_FINANCE, payload: response.data });
};
