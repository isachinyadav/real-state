// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-18893.firebaseapp.com",
  projectId: "mern-estate-18893",
  storageBucket: "mern-estate-18893.appspot.com",
  messagingSenderId: "233880792182",
  appId: "1:233880792182:web:222e60f86b8bf763d98357"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);