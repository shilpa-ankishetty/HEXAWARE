// Function to show the selected screen and hide others with transition
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('login-error');

    if (username && password) {
        localStorage.setItem('username', username);
        window.location.href = 'dashboard.html';
    } else {
        loginError.textContent = "Invalid login credentials. Please try again.";
    }
    return false;
}

// Recover password functionality
function recoverPassword() {
    const recoveryEmail = document.getElementById('recovery-email').value;
    const recoveryMessage = document.getElementById('recovery-message');

    if (recoveryEmail) {
        alert("Recovery email sent!");
        recoveryMessage.textContent = "Please check your email for further instructions.";
        showScreen('login-screen');
    } else {
        recoveryMessage.textContent = "Please enter a valid email address.";
    }
    return false;
}

// Reset password functionality
function resetPassword() {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const resetError = document.getElementById('reset-error');

    if (newPassword === confirmPassword) {
        alert("Password has been reset!");
        showScreen('login-screen');
    } else {
        resetError.textContent = "Passwords do not match!";
    }
    return false;
}

// Registration functionality
function register() {
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-reg-password').value;
    const registerError = document.getElementById('register-error');

    if (password === confirmPassword) {
        alert("Registration successful!");
        showScreen('login-screen');
    } else {
        registerError.textContent = "Passwords do not match!";
    }
    return false;
}
