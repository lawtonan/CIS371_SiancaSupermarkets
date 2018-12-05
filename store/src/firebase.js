
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDeOXRaH5jQ7mD4ZeGNERYDE9L0z7H45g",
  authDomain: "users-c9d2a.firebaseapp.com",
  databaseURL: "https://users-c9d2a.firebaseio.com",
  projectId: "users-c9d2a",
  storageBucket: "users-c9d2a.appspot.com",
  messagingSenderId: "337537309601"
});


export const db = firebaseApp.database();