
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0K5t-5xMBor0gr1dqqxNxm4CGW-rtyZY",
  authDomain: "login-62805.firebaseapp.com",
  projectId: "login-62805",
  storageBucket: "login-62805.appspot.com",
  messagingSenderId: "314105552663",
  appId: "1:314105552663:web:3ba11004ae89406bfb6152",
};

// Initialize Firebase
const app= initializeApp(firebaseConfig);
export const authentication = getAuth(app);
// const app = initializeApp(firebaseConfig);

