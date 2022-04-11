// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPQHHz1kowNp9P5hyU1YdHvyB6Zq9bJ48",
  authDomain: "ema-john-simple-11e27.firebaseapp.com",
  projectId: "ema-john-simple-11e27",
  storageBucket: "ema-john-simple-11e27.appspot.com",
  messagingSenderId: "516355391425",
  appId: "1:516355391425:web:b86fe5ddd5e98ab5b03940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;