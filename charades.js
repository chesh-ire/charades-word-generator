// List of words for charades
const charadesWords = [
    "Debugging",
    "Machine learning ",
    "Linux",
    "Alexa",
    "Ethical hacker ",
    "Alan turing ",
    "",
    // Add more words here
];

// Function to generate a random word from the list
function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * charadesWords.length);
    return charadesWords[randomIndex];
}

// Display a random word when the button is clicked
document.getElementById("generate-button").addEventListener("click", function () {
    const wordDisplay = document.getElementById("word-display");
    wordDisplay.textContent = generateRandomWord();
});

// Initial word generation on page load
document.addEventListener("DOMContentLoaded", function () {
    const wordDisplay = document.getElementById("word-display");
    wordDisplay.textContent = generateRandomWord();
});
