import firebase from "firebase/compat/app";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAuaONOmGcXWmK6QpcNagLyCIEChjRsBc8",
  authDomain: "slack-clone-3e260.firebaseapp.com",
  projectId: "slack-clone-3e260",
  storageBucket: "slack-clone-3e260.appspot.com",
  messagingSenderId: "830105402427",
  appId: "1:830105402427:web:22e0aafc09a85628d9301e",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db, firebaseapp };
