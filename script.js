// script.js
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded correct credentials
    const correctUsername = 'admin';
    const correctPassword = 'password123';

    // Simple validation
    if (username === correctUsername && password === correctPassword) {
        alert('Login successful');
        window.location.href = "dashboard.html"; // Redirect to a new page after successful login
    } else {
        document.getElementById('errorMessage').style.display = 'block'; // Show error message
    }
});
