import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_kW7llzcxQXqyoyLdxNGz48zADoh2wDM",
  authDomain: "uber-49eb9.firebaseapp.com",
  projectId: "uber-49eb9",
  storageBucket: "uber-49eb9.appspot.com",
  messagingSenderId: "125461937860",
  appId: "1:125461937860:web:14447896a80ad70e1ad391",
  measurementId: "G-BWC82ZF66E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};