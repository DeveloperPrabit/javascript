// auth.js
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Firebase sign-in logic
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully logged in
            document.getElementById("main-menu").style.display = "none"; // Hide the login menu
            document.getElementById("game-container").style.display = "block"; // Show the game container

            loadGame(); // Initialize game elements or start the game here
        })
        .catch((error) => {
            // Customize error messages based on error code
            let errorMessage = "";
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = "No user found with this email.";
                    break;
                case 'auth/wrong-password':
                    errorMessage = "Incorrect password. Please try again.";
                    break;
                case 'auth/invalid-email':
                    errorMessage = "Invalid email format.";
                    break;
                default:
                    errorMessage = "An error occurred. Please try again.";
            }
            document.getElementById("error-message").textContent = errorMessage; // Display error message
        });
});

// Function to load the game
function loadGame() {
    // You can initialize your game logic and start the game here
    console.log("Game loaded");
}

// Monitor authentication state to show/hide elements based on login status
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is logged in, show the play button
        document.getElementById("play-btn").style.display = "block";
        
        // Optionally, auto-load the game container if needed
        document.getElementById("main-menu").style.display = "none"; // Hide login
        document.getElementById("game-container").style.display = "block"; // Show game container
        loadGame();
    } else {
        // User is logged out, hide the play button
        document.getElementById("play-btn").style.display = "none";
        document.getElementById("main-menu").style.display = "block"; // Show login form if logged out
        document.getElementById("game-container").style.display = "none"; // Hide game container
    }
});
