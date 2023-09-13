// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEm5qN1cTUcce8lINli66vjGe65ilPxYY",
  authDomain: "tourguide-project.firebaseapp.com",
  projectId: "tourguide-project",
  storageBucket: "tourguide-project.appspot.com",
  messagingSenderId: "643049149316",
  appId: "1:643049149316:web:6be348c7eb1b4ac66443d1",
  measurementId: "G-WGHY8NX54R"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)