import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// console.log(process.API_KEY);
 

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db, firebaseapp };
