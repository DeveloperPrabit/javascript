// auth.js

// Import Firebase Auth
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Initialize Firebase Auth
const auth = getAuth();

// Login button event listener
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Attempt Firebase sign-in
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Redirect to game.html upon successful login
            window.location.href = "game.html";
        })
        .catch((error) => {
            if (error.code === "auth/user-not-found") {
                // Redirect to signup.html if user doesn't exist
                window.location.href = "signup.html";
            } else {
                // Display any other error messages
                document.getElementById("error-message").textContent = error.message;
            }
        });
});

// Authentication State Listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        // If user is signed in, allow access to the "Play" button
        document.getElementById("play-btn").style.display = "block";
    } else {
        // If user is not signed in, hide the "Play" button
        document.getElementById("play-btn").style.display = "none";
    }
});
