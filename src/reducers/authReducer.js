import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: false,
  userId: null,
  authError: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.userId,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: action.userId,
      };
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Podaj poprawne dane',
      };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.err.message,
        passwordError:
          'Sprawdź czy hasło zawiera minimum 6 znaków, oraz czy mail jest poprawnie wpisany',
      };
    default:
      return state;
  }
};
