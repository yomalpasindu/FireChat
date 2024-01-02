import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAI-ob-AFR2gxMBYKVLNmQ9os-xDVYk28o",
  authDomain: "firechat-b705f.firebaseapp.com",
  projectId: "firechat-b705f",
  storageBucket: "firechat-b705f.appspot.com",
  messagingSenderId: "842552164102",
  appId: "1:842552164102:web:4de13efb7608dbca036887",
  measurementId: "G-7GR34YG0TQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
const analytics = getAnalytics(app);