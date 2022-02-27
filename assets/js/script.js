const quiz = document.getElementById('game-area');
const startPage = document.getElementById('start');
const startButton = document.getElementById('play-btn');
const header = document.getElementById('header-text');
const mainGameSection = document.getElementById('main-game');
const howToPage = document.getElementById('about');
const howToButton = document.getElementById('how-to-btn');


startButton.addEventListener('click', startQuiz);
header.addEventListener('click', startOver);
howToButton.addEventListener('click', howToPlay);
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

/**
 * Function that takes the player to the How to play section, hiding all other sections.
 */
function howToPlay () {
    mainGameSection.classList.add('hide');
    howToPage.classList.remove('hide');
}



// Trying out code under here