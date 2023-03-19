//config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF5X704Zym2otaVBp1MA8FdL7h2vdSFVs",
  authDomain: "todo-app-b7ab0.firebaseapp.com",
  projectId: "todo-app-b7ab0",
  storageBucket: "todo-app-b7ab0.appspot.com",
  messagingSenderId: "890184555765",
  appId: "1:890184555765:web:79cc033116b57526f2f9bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the database
export const db = getFirestore(app);