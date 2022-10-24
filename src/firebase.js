import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5UnadNgjViiAoi2228J875pXawFDS-Lo",
  authDomain: "disneyplus-clone-d64b8.firebaseapp.com",
  projectId: "disneyplus-clone-d64b8",
  storageBucket: "disneyplus-clone-d64b8.appspot.com",
  messagingSenderId: "46111425296",
  appId: "1:46111425296:web:c9ab1854391198462c9b95",
  measurementId: "G-BM8CT7DW8L"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
// const analytics = getAnalytics(firebaseApp);

export { auth, provider, storage };
export default db;