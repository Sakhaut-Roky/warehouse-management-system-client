// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1V8M77IFYOAGGA7Np1KBBDoYtoT2N3zE",
  authDomain: "warehouse-management-sys-63eb3.firebaseapp.com",
  projectId: "warehouse-management-sys-63eb3",
  storageBucket: "warehouse-management-sys-63eb3.appspot.com",
  messagingSenderId: "174543612287",
  appId: "1:174543612287:web:cb4fcba5b049380e51924a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;