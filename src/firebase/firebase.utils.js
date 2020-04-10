import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCPfuARdlgmLiqJyDiX3ypTgpbZQsMBZ_Q",
    authDomain: "crown-db-e3281.firebaseapp.com",
    databaseURL: "https://crown-db-e3281.firebaseio.com",
    projectId: "crown-db-e3281",
    storageBucket: "crown-db-e3281.appspot.com",
    messagingSenderId: "568837575602",
    appId: "1:568837575602:web:f59c303946ec6c24b80aab"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


