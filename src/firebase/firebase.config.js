// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrO-EIwxZYb5UeyhOSD2m6IbfzPfvu6uU",
  authDomain: "brandshop-client-side-40470.firebaseapp.com",
  projectId: "brandshop-client-side-40470",
  storageBucket: "brandshop-client-side-40470.appspot.com",
  messagingSenderId: "151999668070",
  appId: "1:151999668070:web:baf2cf7a62b454f77472a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;