
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCr2XId0dlDkAx9f-F6xO79xcHu9tHNWCI",
  authDomain: "tutto-bianco.firebaseapp.com",
  projectId: "tutto-bianco",
  storageBucket: "tutto-bianco.appspot.com",
  messagingSenderId: "982395992834",
  appId: "1:982395992834:web:c6171e1c45d81253aee01b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

