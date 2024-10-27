// game.js
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import app from "../firebase-config.js";

const auth = getAuth(app);

// Redirect to login if user is not authenticated
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html"; // Redirect to login page if user is not logged in
  } else {
    console.log("User is authenticated. Game can be loaded.");
    // Load game or game setup logic here
  }
});
