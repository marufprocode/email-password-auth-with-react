// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmQB80jM-6qFuVxLQJRziqGjh53WNzf6Y",
  authDomain: "first-email-auth-practice.firebaseapp.com",
  projectId: "first-email-auth-practice",
  storageBucket: "first-email-auth-practice.appspot.com",
  messagingSenderId: "674564433713",
  appId: "1:674564433713:web:f215b0c1f36df9283f3210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;