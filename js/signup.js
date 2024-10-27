// signup.js
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import app from "../firebase-config.js";

const auth = getAuth(app);

// Sign up button event listener
document.getElementById("signup-btn").addEventListener("click", async () => {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    document.getElementById("signup-btn").disabled = true; // Disable button
    document.getElementById("loading-spinner").style.display = "block"; // Show loading spinner

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully! Please login."); // Show success message
        window.location.href = "index.html"; // Redirect to login page
    } catch (error) {
        document.getElementById("signup-error-message").textContent = error.message; // Display error message
    } finally {
        document.getElementById("signup-btn").disabled = false; // Re-enable button
        document.getElementById("loading-spinner").style.display = "none"; // Hide loading spinner
    }
});
