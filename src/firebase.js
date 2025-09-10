// Import the functions you need from the SDKs you need
import { getApp,getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADLM6s2W_DNQR7eA20NdFvTe5ge82rzLU",
  authDomain: "shahabaz-portfolio.firebaseapp.com",
  projectId: "shahabaz-portfolio",
  storageBucket: "shahabaz-portfolio.firebasestorage.app",
  messagingSenderId: "445227242206",
  appId: "1:445227242206:web:3ce666aa9922ba6e3da84f"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
const db = getFirestore(app);

export { app, db };