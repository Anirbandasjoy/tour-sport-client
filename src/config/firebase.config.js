import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD6jIm4WQOZxplSrK5Foq2y4NaEJ7agsBs",
  authDomain: "tour-sport.firebaseapp.com",
  projectId: "tour-sport",
  storageBucket: "tour-sport.appspot.com",
  messagingSenderId: "1098957911502",
  appId: "1:1098957911502:web:e4969173299ffadf68a79f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
