// Sample questions for Quiz 3 (English) - Kid-friendly
const questions = [
    {
        question: "What animal says 'meow'?",
        answers: ["Dog", "Cat", "Bird", "Fish"],
        correct: 1 // Cat is at index 1
    },
    {
        question: "What color is the sky on a sunny day?",
        answers: ["Red", "Green", "Blue", "Yellow"],
        correct: 2 // Blue is at index 2
    },
    {
        question: "Which word means the opposite of 'big'?",
        answers: ["Tall", "Small", "Wide", "Long"],
        correct: 1 // Small is at index 1
    },
    {
        question: "What do you call a baby dog?",
        answers: ["Kitten", "Puppy", "Chick", "Cub"],
        correct: 1 // Puppy is at index 1
    },
    {
        question: "Which word rhymes with 'cat'?",
        answers: ["Dog", "Hat", "Sun", "Run"],
        correct: 1 // Hat is at index 1
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
const backButton = document.getElementById('backButton'); // Added back button element

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
const correctSound = new Audio('audio/correct-answer.mp3');
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
        document.cookie = `quiz3Score=${score}; path=/`;
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
