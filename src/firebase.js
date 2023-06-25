import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDpkGT4GNX2LvfuvbnKKgla39L4vLWsygo",
    authDomain: "netflix-clone-a542d.firebaseapp.com",
    projectId: "netflix-clone-a542d",
    storageBucket: "netflix-clone-a542d.appspot.com",
    messagingSenderId: "220870701776",
    appId: "1:220870701776:web:1be5c38a309e97c39e24d5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;