import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAPz1Bs3a8nkKxw-a3eDPijulta9fWN_eM",
  authDomain: "autocertify-65994.firebaseapp.com",
  projectId: "autocertify-65994",
  storageBucket: "autocertify-65994.appspot.com",
  messagingSenderId: "244324952216",
  appId: "1:244324952216:web:2f1722d8d8b4e564d908ed"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const auth = firebase.auth();
export const db = firebase.firestore();
export const st = firebase.storage();

