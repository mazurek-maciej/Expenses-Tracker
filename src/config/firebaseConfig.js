import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDr0DluVJphyuXE7xtgsEIFHNl2eOvFSqk',
  authDomain: 'billexpensestracker.firebaseapp.com',
  databaseURL: 'https://billexpensestracker.firebaseio.com',
  projectId: 'billexpensestracker',
  storageBucket: 'billexpensestracker.appspot.com',
  messagingSenderId: '404472615258',
  appId: '1:404472615258:web:edf122341072a6a8',
};
firebase.initializeApp(config);

export default firebase;
