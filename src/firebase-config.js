import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjVZ27HovAKvLZ1i9KRidWuNhbDRUZy3o",
  authDomain: "yearsofexperience-bffd3.firebaseapp.com",
  projectId: "yearsofexperience-bffd3",
  storageBucket: "yearsofexperience-bffd3.appspot.com",
  messagingSenderId: "322460882729",
  appId: "1:322460882729:web:5610ef84316adb43790938",
  measurementId: "G-898SE8DHX3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
