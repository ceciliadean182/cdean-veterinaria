import firebase from "firebase";
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwg4YeNJvMxqSXWjJxwN44r3BtSRWbSPk",
    authDomain: "chester-c3a6f.firebaseapp.com",
    projectId: "chester-c3a6f",
    storageBucket: "chester-c3a6f.appspot.com",
    messagingSenderId: "555925800449",
    appId: "1:555925800449:web:c82fd68a66b19c426e2200"
  };

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
    return firebase.firestore(app)
}