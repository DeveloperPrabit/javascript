document.getElementById("signup-btn").addEventListener("click", () => {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sendOtp(user); // Trigger OTP
        })
        .catch((error) => {
            document.getElementById("signup-error-message").textContent = error.message;
        });
});

function sendOtp(user) {
    user.sendEmailVerification()
        .then(() => {
            document.getElementById("signup-container").style.display = "none";
            document.getElementById("otp-container").style.display = "block";
        })
        .catch((error) => {
            document.getElementById("signup-error-message").textContent = error.message;
        });
}

document.getElementById("verify-otp-btn").addEventListener("click", () => {
    const otpInput = document.getElementById("otp-input").value;

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            user.reload().then(() => {
                if (user.emailVerified) {
                    window.location.href = "game.html"; // Redirect to game on successful OTP verification
                } else {
                    document.getElementById("otp-error-message").textContent = "OTP is incorrect or not verified.";
                }
            });
        }
    });
});
