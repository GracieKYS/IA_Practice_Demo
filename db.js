// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuH_WgrFTDWP7hS0O1cVu8yrMiPKZNWhI",
  authDomain: "ia-practice-3e1f9.firebaseapp.com",
  projectId: "ia-practice-3e1f9",
  storageBucket: "ia-practice-3e1f9.appspot.com",
  messagingSenderId: "322784460383",
  appId: "1:322784460383:web:05795090579fd2c6f325ea",
  measurementId: "G-YBRWQDNDJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);