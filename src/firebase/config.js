import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYj-KLn0-2KaJSQAE4jrKAXfiWSG4DX8Y",
  authDomain: "gallery-glimpse-b582f.firebaseapp.com",
  projectId: "gallery-glimpse-b582f",
  storageBucket: "gallery-glimpse-b582f.appspot.com",
  messagingSenderId: "108908469283",
  appId: "1:108908469283:web:f76d023ce12afbc87ce596",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
