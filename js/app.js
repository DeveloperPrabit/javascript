// app.js
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import app from "../firebase-config.js";

const auth = getAuth(app);

// Login button event listener
document.getElementById("login-btn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "game.html"; // Redirect to game.html upon successful login
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      window.location.href = "signup.html"; // Redirect to signup.html if user doesn't exist
    } else {
      document.getElementById("error-message").textContent = error.message; // Display error message
    }
  }
});

// Monitor authentication state to toggle UI elements
onAuthStateChanged(auth, (user) => {
  document.getElementById("play-btn").style.display = user ? "block" : "none";
});
// Placeholder for game logic
function loadGame() {
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    // Initialize game elements and start the game
}

// Other game-related functions will be added here
