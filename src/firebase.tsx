import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzHdE9rkSMxEa-0SZvgQaYVKmLDL5e83w",
  authDomain: "musique-e0769.firebaseapp.com",
  projectId: "musique-e0769",
  storageBucket: "musique-e0769.appspot.com",
  messagingSenderId: "164758159918",
  appId: "1:164758159918:web:7d2f859a045a55251595bf",
  measurementId: "G-6FF2NKZYS7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
