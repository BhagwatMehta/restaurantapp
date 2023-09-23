import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhvRU6klGJRvLvvuL1sIy_ydl0AvK6SLw",
  authDomain: "restaurantapp-3609c.firebaseapp.com",
  databaseURL: "https://restaurantapp-3609c-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-3609c",
  storageBucket: "restaurantapp-3609c.appspot.com",
  messagingSenderId: "829847281402",
  appId: "1:829847281402:web:5ea8fc637641ad78013343",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
