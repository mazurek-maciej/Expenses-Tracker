import app from 'firebase/app';

const config = {
  apiKey: 'AIzaSyAp31sfu4RcvuBTOJ5JULT-GUsKAxAfHs0',
  authDomain: 'pocketchange-9928b.firebaseapp.com',
  databaseURL: 'https://pocketchange-9928b.firebaseio.com',
  projectId: 'pocketchange-9928b',
  storageBucket: '',
  messagingSenderId: '1022825962123',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
