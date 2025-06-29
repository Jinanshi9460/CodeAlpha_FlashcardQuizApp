// Sample flashcards
let flashcards = [
    { question: "What is the capital of India?", answer: "New Delhi" },
    { question: "What is 5 + 3?", answer: "8" },
    { question: "HTML stands for?", answer: "HyperText Markup Language" }
];

let currentCard = 0;

// Show the first flashcard when page loads
window.onload = showFlashcard;

function showFlashcard() {
    const card = flashcards[currentCard];
    document.getElementById("question").innerText = card.question;
    document.getElementById("answer").innerText = card.answer;
    document.getElementById("answer").style.display = "none";
}

function toggleAnswer() {
    const answer = document.getElementById("answer");
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    showFlashcard();
}

function prevCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    showFlashcard();
}

function addCard() {
    const newQ = document.getElementById("newQuestion").value.trim();
    const newA = document.getElementById("newAnswer").value.trim();

    if (newQ && newA) {
        flashcards.push({ question: newQ, answer: newA });
        document.getElementById("newQuestion").value = "";
        document.getElementById("newAnswer").value = "";
        alert("New flashcard added!");
    } else {
        alert("Please enter both a question and an answer.");
    }
}