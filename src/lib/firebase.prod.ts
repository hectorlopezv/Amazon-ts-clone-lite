import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDO8kscXbV8AcHz7ZB-owDwMimIA6Zy0mo",
    authDomain: "clone-ts.firebaseapp.com",
    projectId: "clone-ts",
    storageBucket: "clone-ts.appspot.com",
    messagingSenderId: "808538990637",
    appId: "1:808538990637:web:2742071a6d10c5fa1c30a4"
  };
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
