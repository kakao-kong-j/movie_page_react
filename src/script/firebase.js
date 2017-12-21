import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBJ5l0y3m6uTS1Ocxw6-2Ej8beZaP9xkgQ",
  authDomain: "movieinfo-4e81d.firebaseapp.com",
  databaseURL: "https://movieinfo-4e81d.firebaseio.com",
  projectId: "movieinfo-4e81d",
  storageBucket: "movieinfo-4e81d.appspot.com",
  messagingSenderId: "705678923099"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const database = firebase.database();
export const firebaseAuth = firebase.auth;
