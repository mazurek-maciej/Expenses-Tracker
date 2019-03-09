import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import financeReducer from "./financeReducer";
import { categoriesReducers } from "./categoriesReducers";

const reducers = combineReducers({
  finances: financeReducer,
  categories: categoriesReducers,
  form: formReducer
});

export default reducers;
