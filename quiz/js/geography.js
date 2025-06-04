// Sample questions for Quiz 4 (Geography) - Kid-friendly
const questions = [
    {
        question: "Which continent is known for having lots of kangaroos?",
        answers: ["Africa", "Asia", "Australia", "Europe"],
        correct: 2, // Australia is at index 2
    },
    {
        question: "Where do penguins live in the wild?",
        answers: ["Desert", "Antarctica", "Forest", "Ocean"],
        correct: 1, // Antarctica is at index 1
    },
    {
        question: "What is the biggest ocean in the world?",
        answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3, // Pacific is at index 3
    },
    {
        question: "Which continent has the most deserts?",
        answers: ["South America", "Africa", "North America", "Asia"],
        correct: 1, // Africa is at index 1
    },
    {
        question: "Where is the Eiffel Tower located?",
        answers: ["London", "Paris", "New York", "Tokyo"],
        correct: 1, // Paris is at index 1
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

    // Display the image
    const imageElement = document.getElementById('continent-image');
    if (imageElement) {
        console.log('Setting image to:', currentQuestion.imageUrl); // Debugging
        imageElement.src = currentQuestion.imageUrl;
        imageElement.style.display = 'block'; // Show image
    }

    const buttons = answersElement.getElementsByClassName('answer-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = currentQuestion.answers[i];
        buttons[i].classList.remove('flash-green-btn', 'flash-red-btn');
    }
    document.body.classList.remove('flash-green', 'flash-red');
    startTimer();
}

// Check the user's answer
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = currentQuestion.correct;
    const buttons = answersElement.getElementsByClassName('answer-btn');

    if (selectedIndex === correctIndex) {
        // Correct answer: flash green and increment score
        score++;
        document.body.classList.add('flash-green');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add('flash-green-btn');
        }
    } else {
        // Wrong answer: flash red
        document.body.classList.add('flash-red');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add('flash-red-btn');
        }
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
        document.cookie = `quiz4Score=${score}; path=/`;
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
