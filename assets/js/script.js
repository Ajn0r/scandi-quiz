// ------- The basic JavaScript code structure for the quiz is from Web Dev Simplified YouTube,
// ------- 
// -------
const quiz = document.getElementById('game-area');
const startPage = document.getElementById('start');
const startButton = document.getElementsByClassName('play-btn');
const mainGameSection = document.getElementById('main-game');
const howToPage = document.getElementById('about');
const nextButton = document.getElementById('next-btn');
const header = document.getElementById('header-text').addEventListener('click', startOver);
const howToButton = document.getElementById('how-to-btn').addEventListener('click', howToPlay);
const contactBtn = document.getElementById('contact-btn').addEventListener('click', goToContact);

let scoreTracker = document.getElementById('score-count');
let questionCounter = document.getElementById('question-count');
let avalableQuestions = questions;
let currentQuestion = {};

let shuffledQuestion, currentQuestionIndex;

for (let playBtn of startButton) {
    playBtn.addEventListener('click', startQuiz);
}
nextButton.addEventListener('click', () => {
    currentQuestionIndex ++;
    displayNextQuestion();
})

/**
 * Function for starting the quiz, adding the hide class to first section and displaying quiz section.
 */
function startQuiz () {
    mainGameSection.classList.remove('hide');
    startPage.classList.add('hide');
    howToPage.classList.add('hide');
    shuffledQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    quiz.classList.remove('hide');
    displayNextQuestion();
}
function calcualateAnswer (event) {
    const selectedAnswer = event.target;
    for (let i = 0; i < questions.length; i++) {
        buttons = answersBox.children[i];
        if (selectedAnswer) {
            buttons.classList.add('correct');
        }
        else {
            buttons.classList.add('wrong');
        }
        
    //Maybe add a function that does this
    setStatusClass(buttons, correctAnswer);
     /*   */
        nextButton.classList.remove('hide');
}
}


function selectAnswer (e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    //My code
    if (correct){
        scoreTracker.innerHTML ++;
    }
    //Not my code
    setStatusClass(correct)
    Array.from(answersBox.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    nextButton.classList.remove('hide');
}
function setStatusClass (element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function displayNextQuestion() {
    if (currentQuestionIndex <= 5) {
    resetQuestion();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
    }
    else {
        // Code for when game is finished!
    }
}

// -------- JavaScript for displaying quiz here ---------
const questionBox = document.getElementById('questions');
const answersBox = document.getElementById('answers');

function showQuestion (question) { 
    questionCounter.innerHTML ++;
    questionBox.innerHTML = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {  
            button.correct = answer.correct;
        }
        button.addEventListener('click', calcualateAnswer);
        answersBox.appendChild(button);
    });

}

function resetQuestion () {
    nextButton.classList.add('hide');
    while (answersBox.firstChild) {
        answersBox.removeChild(answersBox.firstChild);
    }
}

/**
 * Function that takes the player back to the first start 'page' when header is clicked
 */
 function startOver () {
    startPage.className.remove('hide');
}
/**
 * Function that takes the player to the How to play section, hiding all other sections.
 */
function howToPlay () {
    mainGameSection.classList.add('hide');
    howToPage.classList.remove('hide');
}
/**
 * Function that takes the player to the contact page
 */
function goToContact() {
    window.location.href="contact.html";
}