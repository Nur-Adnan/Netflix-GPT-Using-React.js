// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqBfk3BTzQfGOWJAJ5Cn5zaKRCU7-l0Oo",
  authDomain: "gptnetflix-29136.firebaseapp.com",
  projectId: "gptnetflix-29136",
  storageBucket: "gptnetflix-29136.appspot.com",
  messagingSenderId: "533960309912",
  appId: "1:533960309912:web:00790bc9e5033170af64ed",
  measurementId: "G-JDCCYMEQ3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
