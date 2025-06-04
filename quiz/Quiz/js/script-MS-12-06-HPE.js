document.addEventListener('DOMContentLoaded', () => {
    const speechText = document.getElementById('speechText');
    const speechBubble = document.getElementById('speechBubble');
    const loginForm = document.getElementById('loginForm');

    // Change speech bubble text after 3 seconds
    setTimeout(() => {
        speechBubble.style.animation = 'fadeOut 1s forwards';
        setTimeout(() => {
            speechText.textContent = 'Please enter your username and password to proceed';
            speechBubble.style.animation = 'fadeIn 1s forwards';

            // Show login form with spin animation
            setTimeout(() => {
                loginForm.style.display = 'block';
                loginForm.style.animation = 'spin 1s forwards';
            }, 1000);
        }, 1000);
    }, 3000);
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Store username and password in cookies
        document.cookie = username=$;{username}; path=/
        document.cookie = password=$;{password}; path=/

        // Redirect to menu page
        window.location.href = 'menu.html';
    } else {
        alert('Please enter both username and password');
    }
}