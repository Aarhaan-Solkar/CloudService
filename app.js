// Import modules
import { app } from './firebase-config.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Get Auth
const auth = getAuth(app);

// DOM Elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

document.getElementById('signupBtn').addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      message.textContent = "Signup successful!";
    })
    .catch(error => {
      message.textContent = error.message;
    });
});

document.getElementById('loginBtn').addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      message.textContent = "Login successful!";
    })
    .catch(error => {
      message.textContent = error.message;
    });
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      message.textContent = "Logged out successfully!";
    })
    .catch(error => {
      message.textContent = error.message;
    });
});
