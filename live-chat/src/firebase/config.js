import initializeApp from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDybIMT4OWc04kVrHfmm2GGaPj2sSYCGzY",
  authDomain: "net-ninja-vue-chat-app.firebaseapp.com",
  projectId: "net-ninja-vue-chat-app",
  storageBucket: "net-ninja-vue-chat-app.appspot.com",
  messagingSenderId: "1087386429890",
  appId: "1:1087386429890:web:1d36462f8f071365354e5b"
};

// init firebase
initializeApp(firebaseConfig)

const projectFirestore = getFirestore()
const projectAuth = getAuth()

console.log('firestore initialized config.js')
console.log('db initialized config.js', db)

const timestamp = serverTimestamp

export { projectFirestore, projectAuth, timestamp }