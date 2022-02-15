import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCwdydZlCQWaFcBsGqVAZUh8BfcLfGUMIE',

  authDomain: 'fixent-9cd3e.firebaseapp.com',

  projectId: 'fixent-9cd3e',

  storageBucket: 'fixent-9cd3e.appspot.com',

  messagingSenderId: '898031985539',

  appId: '1:898031985539:web:e1c1a0f77d10f162930cb6',
}

// Initialize Firebase
if (!getApps.length) {
  initializeApp(firebaseConfig)
} else {
  getApp()
}

export const db = getFirestore()
