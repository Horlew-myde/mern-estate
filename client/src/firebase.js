// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blackhawk-estate.firebaseapp.com",
  projectId: "blackhawk-estate",
  storageBucket: "blackhawk-estate.appspot.com",
  messagingSenderId: "179672391378",
  appId: "1:179672391378:web:f62ccfda14cf12768e970b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);