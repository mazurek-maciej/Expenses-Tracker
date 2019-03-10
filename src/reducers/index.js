import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import financeReducer from "./financeReducer";
import { categoriesReducers } from "./categoriesReducers";
import authReducer from "./authReducer";

const reducers = combineReducers({
  finances: financeReducer,
  categories: categoriesReducers,
  form: formReducer,
  auth: authReducer
});

export default reducers;
