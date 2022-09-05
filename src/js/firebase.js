import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGa40ADi6GNhEESbLo2_STRtyWd0mlUw8",
  authDomain: "vue-noteballs.firebaseapp.com",
  projectId: "vue-noteballs",
  storageBucket: "vue-noteballs.appspot.com",
  messagingSenderId: "903667947003",
  appId: "1:903667947003:web:062ab8ea98e4ee61f7e75e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
