// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8S1xq4Jlru24m7I77X8c12vEZdeZEoaI",
  authDomain: "cosmetics-brand-base-client.firebaseapp.com",
  projectId: "cosmetics-brand-base-client",
  storageBucket: "cosmetics-brand-base-client.appspot.com",
  messagingSenderId: "87868197554",
  appId: "1:87868197554:web:fa55d12d963c4116db57ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;