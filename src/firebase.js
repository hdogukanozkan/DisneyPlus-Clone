import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-sfaihKBVDifyo_ruKiFjDj2MK9OdI3I",
  authDomain: "disneyplus-clone-9ca2f.firebaseapp.com",
  projectId: "disneyplus-clone-9ca2f",
  storageBucket: "disneyplus-clone-9ca2f.appspot.com",
  messagingSenderId: "229417566973",
  appId: "1:229417566973:web:0c90bb1c953e80b9c77494",
  measurementId: "G-58MQ6MNGQJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
