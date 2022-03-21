import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCXwIP6-tlbVRXodjAnKzN1xCz7egRTLCI",
  authDomain: "iwallet-86d38.firebaseapp.com",
  projectId: "iwallet-86d38",
  storageBucket: "iwallet-86d38.appspot.com",
  messagingSenderId: "51254215121",
  appId: "1:51254215121:web:3fb1d46f25d27ca1e4a0f0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const auth = firebase.auth();
export const db = firebase.firestore();
export const st = firebase.storage();
