import {combineReducers} from 'redux';
import {incomeOutcomeReducers} from './incomeOutcomeReducers';
import {categoriesReducers} from './categoriesReducers';

const reducers = combineReducers({
  bills: incomeOutcomeReducers,
  categories: categoriesReducers,
});

export default reducers;
