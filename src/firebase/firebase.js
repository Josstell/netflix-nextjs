import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyDgXdlNhD8TQUerJz54vDyufMgsAsZLk-o",
  authDomain: "nextflix-cone.firebaseapp.com",
  projectId: "nextflix-cone",
  storageBucket: "nextflix-cone.appspot.com",
  messagingSenderId: "608326695954",
  appId: "1:608326695954:web:658da3d08c146ac066eccb",
}
// Initialize Firebase
!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

export { auth }

export default db
