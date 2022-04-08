import { initializeApp } from "firebase/app"
import { initializeAuth } from "firebase/auth"


//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkLEprNI600xqpgU2OPCpJ2wR0Obo4zTo",
  authDomain: "citypop-91ebb.firebaseapp.com",
  projectId: "citypop-91ebb",
  storageBucket: "citypop-91ebb.appspot.com",
  messagingSenderId: "404398200209",
  appId: "1:404398200209:web:267298cce4ae98865d7630",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app)
export {auth}