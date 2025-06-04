// Sample questions for Quiz 5 (Science) - Kid-friendly
const questions = [
    {
        question: "What planet is known as the Red Planet?",
        answers: ["Earth", "Moon", "Venus", "Mars"],
        correct: 3 // Mars is at index 3
    },
    {
        question: "How many legs does a spider have?",
        answers: ["9", "5", "8", "10"],
        correct: 2 // 8 is at index 2
    },
    {
        question: "What is the hottest planet in our solar system?",
        answers: ["Venus", "Mars", "Saturn", "Mercury"],
        correct: 0 // Venus is at index 0
    },
    {
        question: "What is the largest animal on Earth?",
        answers: ["Cat", "Blue Whale", "Shark", "Monkey"],
        correct: 1 // Blue Whale is at index 1
    },
    {
        question: "What gas do we breathe in that is essential for our survival?",
        answers: ["Oxygen", "Carbon Dioxide", "Helium", "Methane"],
        correct: 0 // Oxygen is at index 0
    }
];

let currentQuestionIndex = 0;
let timeLeft = 60; // 60 seconds per question
let timerInterval;
let score = 0; // Track the user's score

// Elements
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const timerElement = document.getElementById('timer');

// Start the timer
function startTimer() {
    timeLeft = 60; // Reset timer for each question
    timerElement.textContent = `Timer: ${timeLeft}`;
    clearInterval(timerInterval); // Clear any existing timer
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Timer: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Moving to the next question.");
            nextQuestion();
        }
    }, 1000);
}

// Display the current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    const buttons = answersElement.getElementsByClassName('answer-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = currentQuestion.answers[i];
        buttons[i].classList.remove('flash-green-btn', 'flash-red-btn');
    }
    document.body.classList.remove('flash-green', 'flash-red');
    startTimer();
}

// Load the audio files
const correctSound = new Audio('audio/correctanswer.mp3');
const wrongSound = new Audio('audio/wronganswer.mp3');

// Check the user's answer
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = currentQuestion.correct;
    const buttons = answersElement.getElementsByClassName('answer-btn');

    if (selectedIndex === correctIndex) {
        // Correct answer: flash green, increment score, and play correct sound
        score++;
        document.body.classList.add('flash-green');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add('flash-green-btn');
        }
        correctSound.play(); // Play correct answer sound
    } else {
        // Wrong answer: flash red and play wrong sound
        document.body.classList.add('flash-red');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add('flash-red-btn');
        }
        wrongSound.play(); // Play wrong answer sound
    }

    // Move to the next question after a short delay
    setTimeout(nextQuestion, 1000);
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        clearInterval(timerInterval);
        // Save the score in a cookie
        document.cookie = `quiz5Score=${score}; path=/`;
        alert(`Quiz completed! Your score: ${score}/${questions.length}. Redirecting to the menu.`);
        window.location.href = 'menu.html';
    }
}

// Back button functionality
backButton.addEventListener('click', () => {
    clearInterval(timerInterval); // Stop the timer
    if (confirm('Are you sure you want to exit? Your progress will not be saved.')) {
        window.location.href = 'menu.html'; // Redirect to menu
    }
});

// Add flash animations for buttons
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
    .flash-green-btn {
        animation: flashGreenBtn 0.5s;
    }
    .flash-red-btn {
        animation: flashRedBtn 0.5s;
    }
`;
document.head.appendChild(styleSheet);

// Start the quiz
displayQuestion();

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        clearInterval(timerInterval);
        // Save the score in a cookie
        document.cookie = `quiz1Score=${score}; path=/`;

        // Check if the score is 3 or more, and redirect accordingly
        if (score >= 3) {
            window.location.href = 'pass.html';  // Redirect to the pass page
        } else {
            window.location.href = 'fail.html';  // Redirect to the fail page
        }
    }
}
