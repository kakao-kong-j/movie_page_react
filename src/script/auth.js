import { ref, firebaseAuth } from './firebase'
import firebase from 'firebase'


export function googlelogin (email, pw) {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  firebase.auth().signInWithPopup(provider);
}


export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}


export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
