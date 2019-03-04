import {combineReducers} from 'redux';
import {billsReducers} from './billsReducers';
import {categoriesReducers} from './categoriesReducers';

const reducers = combineReducers({
  bills: billsReducers,
  categories: categoriesReducers,
});

export default reducers;
