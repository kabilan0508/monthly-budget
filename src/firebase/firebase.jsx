// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuXOubVGkyR8oOiOHsyWf3msPaa1U9fiI",
  authDomain: "monthly-budget-a4d96.firebaseapp.com",
  projectId: "monthly-budget-a4d96",
  storageBucket: "monthly-budget-a4d96.appspot.com",
  messagingSenderId: "7524552485",
  appId: "1:7524552485:web:4d1ea2afdfb12b37c494cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
