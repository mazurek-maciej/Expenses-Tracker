import {
  CREATE_FINANCE,
  EDIT_FINANCE,
  FETCH_FINANCES,
  FETCH_FINANCE,
  DELETE_FINANCE
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FINANCES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_FINANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_FINANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_FINANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_FINANCE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

/*
const initialState = [
  {
    id: 1,
    description: "test",
    money: "20",
    category: "",
    financeType: "Income",
    date: "1/2/2019",
    editable: false
  }
];
export const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FINANCE:
      console.log("finance added successfuly");
      return [...state, action.finance];
    case REMOVE_FINANCE:
      console.log("finance removed successfuly");
      return state.filter(finance => finance.id !== action.id);
    case EDIT_FINANCE:
      console.log("finance edit successfuly");
      return state.map(finance =>
        finance.id === action.id
          ? { ...finance, editable: !finance.editable }
          : finance
      );
    case UPDATE_FINANCE:
      console.log(action);
      console.log("finance updated successfuly");
      const newFinanceArray = state.map(finance => {
        if (finance.id === action.updatedFinance.id) {
          return action.updatedFinance;
        }
        return finance;
      });
      return newFinanceArray;

    case CREATE_FINANCE:
      return state;
    default:
      return state;
  }
};
*/
