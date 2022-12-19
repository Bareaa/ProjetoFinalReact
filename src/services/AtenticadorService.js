import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import {app} from '../services/FirebaseConnect'


const auth = getAuth(app);

export default function Login (email, password) {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          resolve(user)
          // ...
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          reject(errorMessage)
        }); 
    })
}    
