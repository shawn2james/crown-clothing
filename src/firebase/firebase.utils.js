import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCemSz32ueTPC6yfH8w_Wn7lfnqYuuxUZ8",
  authDomain: "crown-db-3be50.firebaseapp.com",
  projectId: "crown-db-3be50",
  storageBucket: "crown-db-3be50.appspot.com",
  messagingSenderId: "771528830074",
  appId: "1:771528830074:web:a83bdbda0b26c422721fc3",
  measurementId: "G-QE0439KC0T"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;