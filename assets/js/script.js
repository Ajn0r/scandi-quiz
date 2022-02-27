const quiz = document.getElementById('game-area');
const startPage = document.getElementById('start');
const startButton = document.getElementById('play-btn');
const header = document.getElementById('header-text');

startButton.addEventListener('click', startQuiz);
header.addEventListener('click', startOver);
/**
 * Function for starting the quiz, adding the hide class to first section and displaying quiz section.
 */
function startQuiz () {
    startPage.classList.add('hide');
    quiz.classList.remove('hide');
}
/**
 * Function that takes the player back to the first start 'page' when header is clicked
 */
function startOver () {
    startPage.className.remove('hide');
}