import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAdLOEzNfctYdVDaDtjEunbQsLvQ5FGMd8',

  authDomain: 'fixent-ffac1.firebaseapp.com',

  projectId: 'fixent-ffac1',

  storageBucket: 'fixent-ffac1.appspot.com',

  messagingSenderId: '566510992576',

  appId: '1:566510992576:web:79c48cdd554ec80ccd8125',
}

// Initialize Firebase
if (!getApps.length) {
  initializeApp(firebaseConfig)
} else {
  getApp()
}

export const db = getFirestore()
