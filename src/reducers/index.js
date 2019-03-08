import {combineReducers} from 'redux';
import {incomeOutcomeReducers} from './incomeOutcomeReducers';
import {categoriesReducers} from './categoriesReducers';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
  finances: incomeOutcomeReducers,
  categories: categoriesReducers,
  form: formReducer,
});

export default reducers;
