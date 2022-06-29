import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDx89X-kcfTr8dAi-5o2RyZ5z84gef4dBI",
  authDomain: "fir-9-reading-list-nn.firebaseapp.com",
  projectId: "fir-9-reading-list-nn",
  storageBucket: "fir-9-reading-list-nn.appspot.com",
  messagingSenderId: "311411981942",
  appId: "1:311411981942:web:21935577c6c583de016957"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }