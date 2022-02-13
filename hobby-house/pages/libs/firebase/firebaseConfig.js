import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAAFxuvjTcO1WdL1bQ_Ro0UJ-xzEfR1e8I",
    authDomain: "hobby-house-d4d63.firebaseapp.com",
    databaseURL: "https://hobby-house-d4d63-default-rtdb.firebaseio.com/",
    projectId: "hobby-house-d4d63",
    storageBucket: "hobby-house-d4d63.appspot.com",
    messagingSenderId: "591586178855",
    appId: "1:591586178855:web:c73d1bda36acf6a5cd1b02"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const storage = getStorage(app);

  export { db, storage };