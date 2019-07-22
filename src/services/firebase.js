import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER,
  appId: process.env.VUE_APP_APP_ID,
}
console.log('firebase config', firebaseConfig)

firebase.initializeApp(firebaseConfig)

export default firebase
