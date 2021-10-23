import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8o0Oe5Y9hWwQKWXiiTfN85oVj7oOTX9c",
  authDomain: "inease.firebaseapp.com",
  projectId: "inease",
  storageBucket: "inease.appspot.com",
  messagingSenderId: "1079977506988",
  appId: "1:1079977506988:web:d8e476219837c4f969c709",
  measurementId: "G-MNX4J47DBJ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
