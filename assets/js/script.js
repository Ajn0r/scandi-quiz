// ------- JavaScript for games first page ------------
const quiz = document.getElementById('game-area');
const startPage = document.getElementById('start');
const startButton = document.getElementsByClassName('play-btn');
const mainGameSection = document.getElementById('main-game');
const howToPage = document.getElementById('about');

const header = document.getElementById('header-text').addEventListener('click', startOver);
const howToButton = document.getElementById('how-to-btn').addEventListener('click', howToPlay);
const contactBtn = document.getElementById('contact-btn').addEventListener('click', goToContact);

const shuffledQuestion = '';
const currentQuestionIndex = '';

for (let playBtn of startButton) {
    playBtn.addEventListener('click', startQuiz);
}

/**
 * Function for starting the quiz, adding the hide class to first section and displaying quiz section.
 */
function startQuiz () {
    mainGameSection.classList.remove('hide');
    startPage.classList.add('hide');
    howToPage.classList.add('hide');
    quiz.classList.remove('hide');
    showQuestion();
}
function selectAnswer () {
}

function displayNextQuestion () {}
/*
// -------- JavaScript for displaying quiz here ---------
const questionBox = document.getElementById('questions');
let answersBox = document.getElementById('answers');
function showQuestion () {
    for (let i = 0; i < questions.length; i ++) {
        questionBox.innerHTML = questions[i].question;
   
        answersBox.innerHTML = 
        `<button id="answer-btn-1" class="btn answer-btn">${questions[i].answer[0].text}</button>
        <button id="answer-btn-1" class="btn answer-btn">${questions[i].answer[1].text}</button>
        <button id="answer-btn-1" class="btn answer-btn">${questions[i].answer[2].text}</button>
        <button id="answer-btn-1" class="btn answer-btn">${questions[i].answer[3].text}</button>
        `
    }
}
*/

//function shuffleQuestions () {}


//function calculateRightAnswer () {}

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