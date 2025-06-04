// Array containing questions about different animals
var questions =[
    "Q1: What Is This Animal?",
    "Q2: What Is This Animal?",
    "Q3: What Is This Animal?",
    "Q4: What Is This Animal?",
    "Q5: What Is This Animal?",
    "Q6: What Is This Animal?",
    "Q7: What Is This Animal?",
    "Q8: What Is This Animal?",
    "Q9: What Is This Animal?",
    "Q10: What Is This Animal?"
];

// Function to set the questions in the HTML elements
function setQuestions(){
    for (var i = 0; i < questions.length; i++) {
        // Set the inner HTML of each question element based on the array
        document.getElementById("q" + i).innerHTML = questions[i];
    }
}

function checkAnswers(){
    // Get the selected answer for each question
    var ansQ0 = document.querySelector('input[name="q0"]:checked');
    var ansQ1 = document.querySelector('input[name="q1"]:checked');
    var ansQ2 = document.querySelector('input[name="q2"]:checked');
    var ansQ3 = document.querySelector('input[name="q3"]:checked');
    var ansQ4 = document.querySelector('input[name="q4"]:checked');
    var ansQ5 = document.querySelector('input[name="q5"]:checked');
    var ansQ6 = document.querySelector('input[name="q6"]:checked');
    var ansQ7 = document.querySelector('input[name="q7"]:checked');
    var ansQ8 = document.querySelector('input[name="q8"]:checked');
    var ansQ9 = document.querySelector('input[name="q9"]:checked');
    var ansQ10 = document.querySelector('input[name="q10"]:checked');
    var counter = 0; // Initialize score counter

    // Check the answer for each question and update the display accordingly
    // Question 1
    if(ansQ0 && ansQ0.value.toLowerCase() === "cat"){
        document.getElementById("q0").style.backgroundColor = "green"; // Correct answer
        document.getElementById("q0").innerHTML = "Correct, This Animal Is A Cat!";
        counter++; // Increment score
    }else{
        document.getElementById("q0").style.backgroundColor = "red"; // Incorrect answer
        document.getElementById("q0").innerHTML = "Incorrect, This Animal Is A Cat Better Luck Next Time!";
    }

    // Question 2
    if(ansQ1 && ansQ1.value.toLowerCase() === "crab"){
        document.getElementById("q1").style.backgroundColor = "green"; // Correct answer
        document.getElementById("q1").innerHTML = "Correct, This Animal Is A Crab!";
        counter++;
    }else{
        document.getElementById("q1").style.backgroundColor = "red";
        document.getElementById("q1").innerHTML = "Incorrect, This Animal Is A Crab Better Luck Next Time!";
    }

    // Question 3
    if(ansQ2 && ansQ2.value.toLowerCase() === "monkey"){
        document.getElementById("q2").style.backgroundColor = "green"; // Correct answer
        document.getElementById("q2").innerHTML = "Correct, This Animal Is A Monkey!";
        counter++;
    }else{
        document.getElementById("q2").style.backgroundColor = "red"; // Incorrect answer
        document.getElementById("q2").innerHTML = "Incorrect, This Animal Is A Monkey Better Luck Next Time!";
    }

    // Question 4
    if(ansQ3 && ansQ3.value.toLowerCase() === "penguin"){
        document.getElementById("q3").style.backgroundColor = "green"; // Correct answer
        document.getElementById("q3").innerHTML = "Correct, This Animal Is A Penguin!";
        counter++;
    }else{
        document.getElementById("q3").style.backgroundColor = "red"; // Incorrect answer
        document.getElementById("q3").innerHTML = "Incorrect, This Animal Is A Penguin Better Luck Next Time!";
    }

    // Question 5
    if(ansQ4 && ansQ4.value.toLowerCase() === "parrot"){
        document.getElementById("q4").style.backgroundColor = "green"; // Correct answer
        document.getElementById("q4").innerHTML = "Correct, This Animal Is A Parrot!";
        counter++;
    }else{
        document.getElementById("q4").style.backgroundColor = "red"; // Incorrect answer
        document.getElementById("q4").innerHTML = "Incorrect, This Animal Is A Parrot Better Luck Next Time!";
    }

    // Question 6
    if(ansQ5 && ansQ5.value.toLowerCase() === "bear"){
        document.getElementById("q5").style.backgroundColor = "green"; // Correct answer
        document.getElementById("q5").innerHTML = "Correct, This Animal Is A Bear!";
        counter++;
    }else{
        document.getElementById("q5").style.backgroundColor = "red"; // Incorrect answer
        document.getElementById("q5").innerHTML = "Incorrect, This Animal Is A Bear Better Luck Next Time!";
    }

    // Question 7
    if(ansQ6 && ansQ6.value.toLowerCase() === "sloth"){
        document.getElementById("q6").style.backgroundColor = "green"; // Correct answer
        document.getElementById("q6").innerHTML = "Correct, This Animal Is A Sloth!";
        counter++;
    }else{
        document.getElementById("q6").style.backgroundColor = "red"; // Incorrect answer
        document.getElementById("q6").innerHTML = "Incorrect, This Animal Is A Sloth Better Luck Next Time!";
    }

    // Question 8
    if(ansQ7 && ansQ7.value.toLowerCase() === "jellyfish"){
        document.getElementById("q7").style.backgroundColor = "green"; // Correct answer
        document.getElementById("q7").innerHTML = "Correct, This Animal Is A Jellyfish!";
        counter++;
    }else{
        document.getElementById("q7").style.backgroundColor = "red"; // Incorrect answer
        document.getElementById("q7").innerHTML = "Incorrect, This Animal Is A Jellyfish Better Luck Next Time!";
    }

    // Question 9
    if(ansQ8 && ansQ8.value.toLowerCase() === "sheep"){
        document.getElementById("q8").style.backgroundColor = "green"; // Correct answer
        document.getElementById("q8").innerHTML = "Correct, This Animal Is A Sheep!";
        counter++;
    }else{
        document.getElementById("q8").style.backgroundColor = "red"; // Incorrect answer
        document.getElementById("q8").innerHTML = "Incorrect, This Animal Is A Sheep Better Luck Next Time!";
    }

    // Question 10
    if(ansQ9 && ansQ9.value.toLowerCase() === "squirrel"){
        document.getElementById("q9").style.backgroundColor = "green"; // Correct answer
        document.getElementById("q9").innerHTML = "Correct, This Animal Is A Squirrel!";
        counter++;
    }else{
        document.getElementById("q9").style.backgroundColor = "red"; // Incorrect answer
        document.getElementById("q9").innerHTML = "Incorrect, This Animal Is A Squirrel Better Luck Next Time!";
    }

    console.log("Final Score: " + counter); // Log the score

    // Store the score in localStorage
    localStorage.setItem("score", counter); // Save the score to localStorage

    // Check the percentage and redirect
    var totalQuestions = 10;  // Total number of questions
    var percentage = (counter / totalQuestions) * 100;

    if (percentage >= 60) {
        // Redirect to pass page
        window.location.href = "pass.html";
    } else {
        // Redirect to fail page
        window.location.href = "failed.html";
    }
}