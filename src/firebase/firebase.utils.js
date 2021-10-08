import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCemSz32ueTPC6yfH8w_Wn7lfnqYuuxUZ8",
  authDomain: "crown-db-3be50.firebaseapp.com",
  projectId: "crown-db-3be50",
  storageBucket: "crown-db-3be50.appspot.com",
  messagingSenderId: "771528830074",
  appId: "1:771528830074:web:a83bdbda0b26c422721fc3",
  measurementId: "G-QE0439KC0T",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if user is not signed in 
  if (!userAuth) return;

  // get QueryReference object
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // get QuerySnapshot object
  const snapshot = await userRef.get();

  // if user doesn't exist in database
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    ;
    const createdAt = new Date();

    // add user to database
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user...", error.message);
    }
  }

  return userRef;
};

export default firebase;
