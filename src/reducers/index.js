import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import financeReducer from './financeReducer';
import { categoriesReducers } from './categoriesReducers';
import authReducer from './authReducer';

const reducers = combineReducers({
  finances: financeReducer,
  categories: categoriesReducers,
  form: formReducer,
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default reducers;
