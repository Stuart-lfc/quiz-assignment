 document.addEventListener('DOMContentLoaded', () => {
            const speechText = document.getElementById('speechText');
            const speechBubble = document.getElementById('speechBubble');
            const loginForm = document.getElementById('loginForm');

            // Change speech bubble text after 3 seconds
            setTimeout(() => {
                speechBubble.style.animation = 'fadeOut 1s forwards'; // Start fadeOut after 3 seconds
                setTimeout(() => {
                    speechText.textContent = 'Please enter your name and email to proceed';
                    speechBubble.style.animation = 'fadeIn 1s forwards'; // Fade the bubble in again

                    // Show login form with spin animation after speech bubble fades out
                    setTimeout(() => {
                        loginForm.style.display = 'block'; // Make sure login form is visible
                        loginForm.style.animation = 'spin 1s forwards'; // Apply the spin animation
                    }, 1000); // Delay to allow the speech bubble to fade out
                }, 1000); // After speech bubble text changes, wait 1 second before fading it out
            }, 3000); // Wait 3 seconds before changing the speech bubble text
        });

        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                // Store username and password in cookies
                document.cookie = `username=${username}; path=/`;
                document.cookie = `password=${password}; path=/`;

                // Redirect to menu page
                window.location.href = 'menu.html';
            } else {
                alert('Please enter both username and password');
            }
        }

        document.addEventListener("DOMContentLoaded", function () {
            const card = document.querySelector(".card");
            const allowBtn = document.querySelector(".acceptButton");
            const declineBtn = document.querySelector(".declineButton");
        
            allowBtn.addEventListener("click", () => {
              card.style.display = "none";
              // Optionally: save a cookie or localStorage flag here
            });
        
            declineBtn.addEventListener("click", () => {
              card.style.display = "none";
              // Optionally: handle rejection logic here
            });
          });