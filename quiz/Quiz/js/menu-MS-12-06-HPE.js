document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Get username from cookie
    const username = getCookie('username');
    if (username) {
        welcomeMessage.textContent = Welcome ${username}, please select a quiz!;
    } else {
        welcomeMessage.textContent = 'Welcome, please select a quiz!';
    }
});

function getCookie(name) {
    const value = ; ${document.cookie};
    const parts = value.split(; ${name}=);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}