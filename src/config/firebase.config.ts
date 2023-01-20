import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5P9ELcL_0qeH5OCdLGQtOjehtAIAFhPA",
  authDomain: "my-store-5ee5e.firebaseapp.com",
  projectId: "my-store-5ee5e",
  storageBucket: "my-store-5ee5e.appspot.com",
  messagingSenderId: "63106791527",
  appId: "1:63106791527:web:1328c5d158265f43cf7cc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
