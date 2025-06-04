// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Get username from cookie
let username = getCookie('username') || 'User';

// Update welcome message
document.getElementById('welcomeMessage').innerText = `Hey ${username}, welcome to the quiz! Please select a quiz.`;

// 12-hour clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').innerText = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Toggle clock visibility
const clock = document.getElementById('clock');
const toggleButton = document.getElementById('toggleClock');
let isClockVisible = true;

toggleButton.addEventListener('click', () => {
    if (isClockVisible) {
        clock.classList.add('hidden');
        toggleButton.textContent = 'Show Clock';
        isClockVisible = false;
    } else {
        clock.classList.remove('hidden');
        toggleButton.textContent = 'Hide Clock';
        isClockVisible = true;
    }
});

// Fade-in animation and score display
document.addEventListener('DOMContentLoaded', () => {
    const quizBoxes = document.querySelectorAll('.quiz-box');
    quizBoxes.forEach((box) => {
        box.classList.add('fade-in');
    });

    for (let i = 1; i <= 5; i++) {
        const score = parseInt(getCookie(`quiz${i}Score`)) || 0;
        const circle = document.getElementById(`quiz${i}-circle`);
        if (score > 0) {
            circle.style.display = 'flex';
            circle.textContent = `${score}/5`;
            if (score >= 3) {
                circle.classList.remove('red');
                circle.classList.add('green');
            } else {
                circle.classList.remove('green');
                circle.classList.add('red');
            }
        } else {
            circle.style.display = 'none';
            circle.textContent = '';
            circle.classList.remove('green', 'red');
        }
    }
});

// Reset progress function
function resetProgress() {
    setCookie('quizzesCompleted', '', -1);
    for (let i = 1; i <= 5; i++) {
        setCookie(`quiz${i}Score`, '', -1);
    }
    alert('Progress reset! You can now retake the quizzes.');
    window.location.reload();
}