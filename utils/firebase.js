import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,

  authDomain: process.env.NEXT_PUBLIC_authDomain,

  projectId: process.env.NEXT_PUBLIC_projectId,

  storageBucket: process.env.NEXT_PUBLIC_storageBucket,

  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,

  appId: process.env.NEXT_PUBLIC_appId,
};

// Initialize Firebase
if (!getApps.length) {
  initializeApp(firebaseConfig);
} else {
  getApp();
}

export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
