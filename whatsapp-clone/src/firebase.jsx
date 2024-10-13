// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// If you're using analytics, uncomment the line below
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxHeuFC7EbEnUYfaup3Wi6UN2FreuaIS8",
  authDomain: "whatsapp-clone-4d72f.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-4d72f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whatsapp-clone-4d72f",
  storageBucket: "whatsapp-clone-4d72f.appspot.com",
  messagingSenderId: "989802819962",
  appId: "1:989802819962:web:115dc913563be427d5e6c3",
  measurementId: "G-S9D74BB7PE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize analytics if you're using it
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default app;
