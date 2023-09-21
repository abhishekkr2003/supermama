import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7C1zP3T83Lv8sI_OmqfpvbuGFv5PBQZo",
  authDomain: "supermama-ea142.firebaseapp.com",
  projectId: "supermama-ea142",
  storageBucket: "supermama-ea142.appspot.com",
  messagingSenderId: "823404214032",
  appId: "1:823404214032:web:90a7f6b0829066a2219795",
  measurementId: "G-JM0P3QXWL9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore()
export const rf = ref(storage,'logo')
