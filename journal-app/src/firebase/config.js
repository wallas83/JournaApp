// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth' ;
import{getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP-F3MhFQj67HxM0wZRbUDgF1n98Xg6Oo",
  authDomain: "react-cursos-89a06.firebaseapp.com",
  projectId: "react-cursos-89a06",
  storageBucket: "react-cursos-89a06.appspot.com",
  messagingSenderId: "477486499514",
  appId: "1:477486499514:web:f6f77da809f4cb8346a483",
  measurementId: "G-DK68ECWLJF"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseBD = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);