// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbdX0gVBCwSUq1Lh6syqpydz9OmxxhEoU",
  authDomain: "coffee-store-1ee96.firebaseapp.com",
  projectId: "coffee-store-1ee96",
  storageBucket: "coffee-store-1ee96.appspot.com",
  messagingSenderId: "172444432213",
  appId: "1:172444432213:web:7b481177c58d2cf47ca1dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;