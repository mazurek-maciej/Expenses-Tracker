import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = credentials => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = await getFirebase();
  await firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    })
    .catch(err => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    });
};

export const signUp = newUser => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(response =>
      firestore
        .collection('users')
        .doc(response.user.uid)
        .set({
          name: newUser.name,
          surname: newUser.surname,
        })
    )
    .then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    })
    .catch(err => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
};
