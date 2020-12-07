import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAV89S1405AJ_QLGhJUDW4j4_6IHhnjqT4",
  authDomain: "gallery-57a73.firebaseapp.com",
  databaseURL: "https://gallery-57a73.firebaseio.com",
  projectId: "gallery-57a73",
  storageBucket: "gallery-57a73.appspot.com",
  messagingSenderId: "110642356347",
  appId: "1:110642356347:web:88e48d8ab0017f60d5c2de",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
var googleProvider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, googleProvider, projectFirestore, projectStorage, timestamp };
