// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa2TFcFET89CUEjtxuMzA_-zfOuMSugXo",
  authDomain: "travel-website-cd215.firebaseapp.com",
  projectId: "travel-website-cd215",
  storageBucket: "travel-website-cd215.firebasestorage.app",
  messagingSenderId: "523542205539",
  appId: "1:523542205539:web:eedd2f934774a715ca1456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)