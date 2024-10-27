// signup.js

// Firebase Auth and OTP Functions
import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth();

// Handle signup and OTP generation
document.getElementById("signup-btn").addEventListener("click", () => {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Send OTP to email
            sendSignInLinkToEmail(auth, email, {
                url: "http://localhost:5500/game.html", // Update with your URL
                handleCodeInApp: true,
            });
            // Show OTP input
            document.getElementById("signup-message").textContent = "OTP sent to your email.";
            document.getElementById("otp-container").style.display = "block";
        })
        .catch((error) => {
            document.getElementById("signup-message").textContent = error.message;
        });
});

// Verify OTP
document.getElementById("verify-otp-btn").addEventListener("click", () => {
    const email = document.getElementById("signup-email").value;
    const otpCode = document.getElementById("otp-code").value;

    if (isSignInWithEmailLink(auth, otpCode)) {
        signInWithEmailLink(auth, email, otpCode)
            .then(() => {
                window.location.href = "game.html"; // Redirect to game.html after verification
            })
            .catch((error) => {
                document.getElementById("signup-message").textContent = error.message;
            });
    } else {
        document.getElementById("signup-message").textContent = "Invalid OTP code.";
    }
});
