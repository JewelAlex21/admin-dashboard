import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-54d28.firebaseapp.com",
  projectId: "tutorial-54d28",
  storageBucket: "tutorial-54d28.appspot.com",
  messagingSenderId: "888876946902",
  appId: "1:888876946902:web:baf9f4b7f8e119c64b8077"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);