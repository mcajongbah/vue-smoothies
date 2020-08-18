import firebase from 'firebase/app';
import firestore from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW2r1xBfTMD7U0N_W687q-syXUGXaFsts",
    authDomain: "smoothies-10d7b.firebaseapp.com",
    databaseURL: "https://smoothies-10d7b.firebaseio.com",
    projectId: "smoothies-10d7b",
    storageBucket: "smoothies-10d7b.appspot.com",
    messagingSenderId: "1018848776741",
    appId: "1:1018848776741:web:63c99bb6157ea2c67ee5cc"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();