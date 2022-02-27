const quiz = document.getElementById('game-area');
const startPage = document.getElementById('start');
const startButton = document.getElementById('play-btn');
const howToBtn = document.getElementById('how-to-btn');
const header = document.getElementById('header-text');


startButton.addEventListener('click', startQuiz);
howToBtn.addEventListener('click', showHowTo);
header.addEventListener('click', startOver);

function startQuiz () {
    startPage.classList.add('hide');
    quiz.classList.remove('hide');
}

function startOver () {
    
    startPage.className.remove('hide');

}