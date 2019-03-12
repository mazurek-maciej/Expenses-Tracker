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
