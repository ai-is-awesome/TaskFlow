import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../secret";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

console.log("Firebase loaded");
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("USER: ", user);
    return;
  } else {
    console.log("NO USER");
    return;
  }
});
