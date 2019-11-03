import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAPyspZihC0tSIrTdVguOuunfrVaN861qI",
  authDomain: "crwn-db-ijk.firebaseapp.com",
  databaseURL: "https://crwn-db-ijk.firebaseio.com",
  projectId: "crwn-db-ijk",
  storageBucket: "crwn-db-ijk.appspot.com",
  messagingSenderId: "1000799176223",
  appId: "1:1000799176223:web:3f7aced0293d81fad0b72a",
  measurementId: "G-GL30FPSWKL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
