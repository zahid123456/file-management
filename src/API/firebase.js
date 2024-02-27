import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4GR8mcQvIuSk7c4o_tUS4GZQeNp4N43A",
  authDomain: "cms-website-89ab5.firebaseapp.com",
  projectId: "cms-website-89ab5",
  storageBucket: "cms-website-89ab5.appspot.com",
  messagingSenderId: "134669106014",
  appId: "1:134669106014:web:83febc892e1e40c6cfadcf",
  measurementId: "G-98J0FT6273"
}; 

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
