import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCA8Ra5oVN5qzvhsTIxfbPUpHfxassT2_A",
    authDomain: "login-425310.firebaseapp.com",
    projectId: "login-425310",
    storageBucket: "login-425310.appspot.com",
    messagingSenderId: "886506424850",
    appId: "1:886506424850:web:579ba8413e7e6ed8fda6cb",
    measurementId: "G-QFZEDTEQDJ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup };
