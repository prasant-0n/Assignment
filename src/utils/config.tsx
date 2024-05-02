// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoRPY_jzNQaGzth6ukRbtXYRo3yD7hwVY",
  authDomain: "assignment-35de9.firebaseapp.com",
  projectId: "assignment-35de9",
  storageBucket: "assignment-35de9.appspot.com",
  messagingSenderId: "271108277469",
  appId: "1:271108277469:web:9c3c4c4300e1acafac0734",
  measurementId: "G-108RPTQMZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);