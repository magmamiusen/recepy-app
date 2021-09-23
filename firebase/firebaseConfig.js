import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqxrkzx0XiDzttNZOxv3Fcga71bwJ_QeE",
  authDomain: "recepy-app-7d367.firebaseapp.com",
  projectId: "recepy-app-7d367",
  storageBucket: "recepy-app-7d367.appspot.com",
  messagingSenderId: "787176970874",
  appId: "1:787176970874:web:8763d0b046e784d16779c3",
  measurementId: "G-RSS3XWWP81"
};

export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);