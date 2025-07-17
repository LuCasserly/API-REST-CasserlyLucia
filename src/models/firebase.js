
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAeQ867-s9G5TagbT7N3-m_uSUzBIPXve4",
  authDomain: "api-rest-casserlylucia.firebaseapp.com",
  projectId: "api-rest-casserlylucia",
  storageBucket: "api-rest-casserlylucia.firebasestorage.app",
  messagingSenderId: "342256406195",
  appId: "1:342256406195:web:20ec563a579c836f3c6ac6",
  measurementId: "G-9YHL0GBV7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };