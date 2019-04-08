import _ from 'lodash';
import {
  CREATE_FINANCE,
  EDIT_FINANCE,
  FETCH_FINANCES,
  FETCH_FINANCE,
  DELETE_FINANCE,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FINANCES:
      console.log(action.payload);
      return { ...state, ..._.mapKeys(action.payload, '_id') };
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
