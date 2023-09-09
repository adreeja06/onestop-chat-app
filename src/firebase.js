// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCARbmNqH3ziuTLo2US4dN8BSL5nsNXsP4",
  authDomain: "our-onestop-chatapp.firebaseapp.com",
  projectId: "our-onestop-chatapp",
  storageBucket: "our-onestop-chatapp.appspot.com",
  messagingSenderId: "997911302642",
  appId: "1:997911302642:web:ef6cb37f755fc630541b6b",
  measurementId: "G-G7DLK2D305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);