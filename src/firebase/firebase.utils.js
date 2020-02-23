import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyCLBg7E_qkBR6oNwkrKwgS34dOFVqEaQTA",
  authDomain: "jb-clothing-db.firebaseapp.com",
  databaseURL: "https://jb-clothing-db.firebaseio.com",
  projectId: "jb-clothing-db",
  storageBucket: "jb-clothing-db.appspot.com",
  messagingSenderId: "1062171111683",
  appId: "1:1062171111683:web:48d438a13e2f79bce5b936",
  measurementId: "G-B0S2CH3LZW"
};

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user" + error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
