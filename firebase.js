import * as firebase from "firebase";


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
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.getAuth(app)

export { auth };