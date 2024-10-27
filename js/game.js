// game.js

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Redirect to index.html if user is not authenticated
        window.location.href = "index.html";
    } else {
        // User is authenticated, proceed with game initialization
        loadGame();
    }
});

// Function to initialize the game
function loadGame() {
    console.log("Game initialized");
    // Add game logic here
}
