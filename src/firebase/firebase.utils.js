import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBH_ji5AdTecVSvS7fQ_vNRIvjQsK5tG24",
  authDomain: "clothing-d74b7.firebaseapp.com",
  databaseURL: "https://clothing-d74b7.firebaseio.com",
  projectId: "clothing-d74b7",
  storageBucket: "clothing-d74b7.appspot.com",
  messagingSenderId: "846082456555",
  appId: "1:846082456555:web:c1131554c9171fd8ac77ae",
  measurementId: "G-9FJXDH1GPF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log(`error creating user`, error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
