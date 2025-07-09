// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdumC9Me4-vJvri_DCx8eAlCotWNabz-4",
  authDomain: "portfolio-v2-c436d.firebaseapp.com",
  projectId: "portfolio-v2-c436d",
  storageBucket: "portfolio-v2-c436d.firebasestorage.app",
  messagingSenderId: "226441893938",
  appId: "1:226441893938:web:2cc3c843ad4c868f95842b",
  measurementId: "G-YD2LV7W3MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

// Export both app and storage
export { storage };
export default app;