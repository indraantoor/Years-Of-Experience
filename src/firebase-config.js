import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

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
// export const db = initializeFirestore(app, {
//   cacheSizeBytes: CACHE_SIZE_UNLIMITED
// });
export const storage = getStorage(app);

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == "failed-precondition") {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
  } else if (err.code == "unimplemented") {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
  }
});
