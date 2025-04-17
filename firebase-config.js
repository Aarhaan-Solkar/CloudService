// Import Firebase core and analytics
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA5JaVixZF7rRyBmzWS1vKAH0Yn4Bp6t64",
  authDomain: "cloud-29993.firebaseapp.com",
  projectId: "cloud-29993",
  storageBucket: "cloud-29993.firebasestorage.app",
  messagingSenderId: "973156990813",
  appId: "1:973156990813:web:0a054380e2dff99f2ab2b4",
  measurementId: "G-L51LBGE5RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
