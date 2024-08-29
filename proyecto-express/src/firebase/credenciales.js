// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6mD3icq9fcQRzN7T6Ke5WftPJIz4PXnM",
  authDomain: "proyecto-final-8f2f4.firebaseapp.com",
  projectId: "proyecto-final-8f2f4",
  storageBucket: "proyecto-final-8f2f4.appspot.com",
  messagingSenderId: "318990388650",
  appId: "1:318990388650:web:42dc76ff395120edfbafd3",
  measurementId: "G-MCV2T3WHT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export{auth, app }