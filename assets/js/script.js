// ------- JavaScript for games first page ------------
const quiz = document.getElementById('game-area');
const startPage = document.getElementById('start');
const startButton = document.getElementsByClassName('play-btn');
const header = document.getElementById('header-text');
const mainGameSection = document.getElementById('main-game');
const howToPage = document.getElementById('about');
const howToButton = document.getElementById('how-to-btn');
const contactBtn = document.getElementById('contact-btn');

for (let playBtn of startButton) {
    playBtn.addEventListener('click', startQuiz);
}
header.addEventListener('click', startOver);
howToButton.addEventListener('click', howToPlay);
contactBtn.addEventListener('click', goToContact); 

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

    // -------- JavaScript for displaying quiz here ---------
const questionBox = document.getElementById('questions');
const answerOption = document.getElementsByClassName('answer-btn');
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

//function shuffleQuestions () {}

function displayAnswers () {
  
}
//function calculateRightAnswer () {}
//function displayNextQuestion () {}