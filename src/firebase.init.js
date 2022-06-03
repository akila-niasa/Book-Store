// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZltsTqy6FhDVoRScIs7UYw77avxSYK8I",
  authDomain: "book-store-3f9e8.firebaseapp.com",
  projectId: "book-store-3f9e8",
  storageBucket: "book-store-3f9e8.appspot.com",
  messagingSenderId: "597705890373",
  appId: "1:597705890373:web:0f120b724a6c9771d9212c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;