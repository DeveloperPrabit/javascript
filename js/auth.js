// auth.js

// Import Firebase Auth
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Initialize Firebase Auth
const auth = getAuth();

document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Attempt to sign in
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Redirect to game.html if login is successful
            window.location.href = "game.html";
        })
        .catch((error) => {
            if (error.code === "auth/user-not-found") {
                // Redirect to signup.html if the user does not exist
                window.location.href = "signup.html";
            } else {
                // Display error message for other errors
                document.getElementById("error-message").textContent = error.message;
            }
        });
});

// Monitor Authentication State
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Show the play button if the user is logged in
        document.getElementById("play-btn").style.display = "block";
    } else {
        // Hide the play button if the user is logged out
        document.getElementById("play-btn").style.display = "none";
    }
});
