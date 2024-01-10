// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaqQHg5nurWyAPOuuMPaCKVnjC-tDOAFs",
  authDomain: "react-firebase-auth-d0b59.firebaseapp.com",
  projectId: "react-firebase-auth-d0b59",
  storageBucket: "react-firebase-auth-d0b59.appspot.com",
  messagingSenderId: "470993835946",
  appId: "1:470993835946:web:669cb7d9e9e27de9043dd3",
  measurementId: "G-LRSW4M7FQ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
