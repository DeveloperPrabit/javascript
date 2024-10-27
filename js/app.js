// app.js
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import app from "../firebase-config.js";

const auth = getAuth(app);

// Login button event listener
document.getElementById("login-btn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    document.getElementById("login-btn").disabled = true; // Disable button
    document.getElementById("loading-spinner").style.display = "block"; // Show loading spinner

    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "game.html"; // Redirect to game.html upon successful login
    } catch (error) {
        document.getElementById("error-message").textContent = error.message; // Display error message
    } finally {
        document.getElementById("login-btn").disabled = false; // Re-enable button
        document.getElementById("loading-spinner").style.display = "none"; // Hide loading spinner
    }
});

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "game.html"; // Redirect to game.html if user is logged in
    }
});
