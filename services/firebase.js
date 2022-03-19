import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyAH8phFsJMWQETFKFP4qsMEoPt2-pUHNBg',
  authDomain: 'maverick-6db52.firebaseapp.com',
  projectId: 'maverick-6db52',
  storageBucket: 'maverick-6db52.appspot.com',
  messagingSenderId: '106543780174',
  appId: '1:106543780174:web:f18475519d125e7b120e1f'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export const auth = firebase.auth()
export const db = firebase.firestore()
export const st = firebase.storage()
