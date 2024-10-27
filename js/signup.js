// signup.js
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import app from "../firebase-config.js";

const auth = getAuth(app);

document.getElementById("signup-btn").addEventListener("click", async () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful! Redirecting to login page.");
    window.location.href = "index.html"; // Redirect to login after signup
  } catch (error) {
    document.getElementById("signup-error").textContent = error.message;
  }
});
