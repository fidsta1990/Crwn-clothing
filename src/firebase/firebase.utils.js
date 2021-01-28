import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCFLycBrHnzEL820TFeF1sqQDJlYfvxCY0",
  authDomain: "crwn-clothing-cfeaf.firebaseapp.com",
  projectId: "crwn-clothing-cfeaf",
  storageBucket: "crwn-clothing-cfeaf.appspot.com",
  messagingSenderId: "540417715617",
  appId: "1:540417715617:web:b2a7e838d16e17f9796fe0",
};


firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
