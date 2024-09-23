
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWNdEIhddZWLPmAMEEhR3wTZ-XxrPmHao",
  authDomain: "nikeapp-a9315.firebaseapp.com",
  projectId: "nikeapp-a9315",
  storageBucket: "nikeapp-a9315.appspot.com",
  messagingSenderId: "962131789737",
  appId: "1:962131789737:web:10ebac719a975eb00166b8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth , db };



