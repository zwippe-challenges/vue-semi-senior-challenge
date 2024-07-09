// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzsK_933BB9xCIIdSIBU-jAbuKeyZMkhI",
  authDomain: "reto-70ade.firebaseapp.com",
  projectId: "reto-70ade",
  storageBucket: "reto-70ade.appspot.com",
  messagingSenderId: "239898625106",
  appId: "1:239898625106:web:7937b9e275d542b660cb8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseStore = getFirestore()
export const auth = getAuth(app)
