import firebase from "firebase/app";
import "firebase/auth";

let config = {
  apiKey: "AIzaSyAp31sfu4RcvuBTOJ5JULT-GUsKAxAfHs0",
  authDomain: "pocketchange-9928b.firebaseapp.com",
  databaseURL: "https://pocketchange-9928b.firebaseio.com",
  projectId: "pocketchange-9928b",
  storageBucket: "",
  messagingSenderId: "1022825962123"
};
firebase.initializeApp(config);

export default firebase;
