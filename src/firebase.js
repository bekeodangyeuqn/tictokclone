// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcmL9onT5hC2BwUrNgo86i8Q4rDnrrGjU",
  authDomain: "tiktok-clone-5b88e.firebaseapp.com",
  projectId: "tiktok-clone-5b88e",
  storageBucket: "tiktok-clone-5b88e.appspot.com",
  messagingSenderId: "41299507150",
  appId: "1:41299507150:web:12fd5a914ed03a68ab5d9f",
  measurementId: "G-EFM61X0RV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export default db