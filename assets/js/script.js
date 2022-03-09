// ------- The basic JavaScript code structure for the quiz is from Web Dev Simplified YouTube, see credits in Readme.
// ------- Most of the code has then been altered and had added functionality to it by me.

const quiz = document.getElementById('game-area');
const startPage = document.getElementById('start');
const startButton = document.getElementsByClassName('play-btn');
const mainGameSection = document.getElementById('main-game');
const howToPage = document.getElementById('about');
const nextButton = document.getElementById('next-btn');
const questionBox = document.getElementById('questions');
const answersBox = document.getElementById('answers');
const endGamePage = document.getElementById('end-game');
const goBackButton = document.getElementsByClassName('back-btn');

let scoreTracker = document.getElementById('score-count');
let questionCounter = document.getElementById('question-count');
let score = 0;
let shuffledQuestion, currentQuestionIndex;

document.getElementById('header-text').addEventListener('click', startOver);
document.getElementById('how-to-btn').addEventListener('click', howToPlay);
document.getElementById('contact-btn').addEventListener('click', goToContact);

//Eventlistener to play and go back buttons.
for (let playBtn of startButton) {
    playBtn.addEventListener('click', startQuiz);
}
for (let backBtn of goBackButton) {
    backBtn.addEventListener('click', startOver);
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    displayNextQuestion();
});

/**
 * Function for starting the quiz,
 * adding the hide class to first section
 * and displaying quiz section.
 */
function startQuiz() {
    mainGameSection.classList.remove('hide');
    startPage.classList.add('hide');
    howToPage.classList.add('hide');
    endGamePage.classList.add('hide');
    shuffledQuestion = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    quiz.classList.remove('hide');
    displayNextQuestion();
}

/**
 * Function to display the question and adding answer buttons.
 */
function showQuestion(question) {
    questionCounter.innerHTML++;
    questionBox.innerHTML = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.classList.add('btn-hover');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answersBox.appendChild(button);

    });

}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    selectedButton.classList.add('selected');

    if (correct) {
        score++;
        scoreTracker.innerHTML = score;
    }

    Array.from(answersBox.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.removeEventListener('click', selectAnswer);
    });
    nextButton.classList.remove('hide');

}
/**
 * Function that adds the correct and incorrect
 * class to answer buttons, to change color and add icon.
 */
function setStatusClass(element, correct) {
    clearStatusClass(element);

    if (correct) {
        element.innerHTML += ` <i class="fas fa-check"></i>`;
        element.classList.add('correct');
        element.classList.remove('btn-hover');

    } else {
        element.innerHTML += ` <i class="fas fa-times-circle"></i>`;
        element.classList.add('wrong');
        element.classList.remove('btn-hover');
    }
}
/**
 * Removes the correct and wrong class
 * from answer buttons.
 */
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
/**
 * Function that displays the next question,
 * until it reaches question 8.
 */
function displayNextQuestion() {
    if (currentQuestionIndex <= 7) {
        resetQuestion();
        showQuestion(shuffledQuestion[currentQuestionIndex]);
    } else {
        finishedGame();
    }
}
/**
 * Function that reset the question,
 * and hiding the next button.
 */
function resetQuestion() {
    nextButton.classList.add('hide');
    while (answersBox.firstChild) {
        answersBox.removeChild(answersBox.firstChild);
    }
}
/**
 * Function that displays the finished game content,
 * and letting the player know how they got on.
 */
function finishedGame() {
    let endScore = document.getElementById('end-score');
    let resultEvaluation = document.getElementById('result-evaluation');
    endScore.innerHTML = score;
    mainGameSection.classList.add('hide');
    endGamePage.classList.remove('hide');

    if (score > 7) {
        resultEvaluation.innerHTML = `
        <h3>Whooow!</h3>
        <p>That's some awesome scores there,
         'Full pott' as they say in Sweden.<br>
         You must be a true Scandi!</p>`;
    } else if (score > 4) {
        resultEvaluation.innerHTML = `
        <p>Not to shabby! You know a thing
         or two about Scandinavia!</p>`;
    } else {
        resultEvaluation.innerHTML = `
        <p>Awww! Don't be sad, try again,
         maybe the questions will be easier this time.</p>`;
    }
    scoreTracker.innerHTML = 0;
    questionCounter.innerHTML = 0;
    score = 0;
}
/**
 * Function that takes the player back to
 * the first start 'page' when header is clicked
 */
function startOver() {
    window.location.href = "index.html";
}
/**
 * Function that takes the player to the
 * How to play section, hiding all other sections.
 */
function howToPlay() {
    mainGameSection.classList.add('hide');
    howToPage.classList.remove('hide');
}
/**
 * Function that takes the player to the contact page
 */
function goToContact() {
    window.location.href = "contact.html";
}