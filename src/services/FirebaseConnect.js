// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJP4AdDfkSp9SfFzVK_3FeAFR2ZUujV3I",
  authDomain: "starwarsprojetofinal.firebaseapp.com",
  projectId: "starwarsprojetofinal",
  storageBucket: "starwarsprojetofinal.appspot.com",
  messagingSenderId: "124448020147",
  appId: "1:124448020147:web:a0093824364654c0a282c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const getAuth = getAuth(app)
