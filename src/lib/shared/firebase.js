import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyCbtrtG8JOpdCJLczbxIXfjKb2rAl5uW1A',
  authDomain: 'facebook-clone-svelte.firebaseapp.com',
  projectId: 'facebook-clone-svelte',
  storageBucket: 'facebook-clone-svelte.appspot.com',
  messagingSenderId: '375392556606',
  appId: '1:375392556606:web:5ab9e05658d228a875636f',
  measurementId: 'G-2QL5LWBHDM'
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()
export const storage = firebase.storage()