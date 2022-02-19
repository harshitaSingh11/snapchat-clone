import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAiBgXX6Rv7DAL-MU93Or5I7iugsBL-RO8",
  authDomain: "snapchat-87aeb.firebaseapp.com",
  projectId: "snapchat-87aeb",
  storageBucket: "snapchat-87aeb.appspot.com",
  messagingSenderId: "19730271949",
  appId: "1:19730271949:web:6aadc6755b26e25d64a384",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
