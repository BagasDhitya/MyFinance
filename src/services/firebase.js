import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk6uG5GqZobg-MZJRiOwtnOIYCrTUnl3I",
  authDomain: "my-finance-8500f.firebaseapp.com",
  projectId: "my-finance-8500f",
  storageBucket: "my-finance-8500f.appspot.com",
  messagingSenderId: "617870410231",
  appId: "1:617870410231:web:13eb494b038e82b67c6ef2",
  measurementId: "G-NP2K1KM2SH",
};

export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
