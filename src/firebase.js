import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //config
  apiKey: "AIzaSyAw8vPOKhr3mM8DC-wAxgpCSTUhvoyuryw",
    authDomain: "otp-1223f.firebaseapp.com",
    projectId: "otp-1223f",
    storageBucket: "otp-1223f.appspot.com",
    messagingSenderId: "540955548310",
    appId: "1:540955548310:web:8969a61813f6e772e580b7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);