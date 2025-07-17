// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);