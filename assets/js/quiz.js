/* This quiz was built with the help of James Quick's Udemy course. The link can be found in the readme. */

/**
 * All the Questions and Answers data stored in this array object
 */
 let quizQuestions = [
  {
    question: "Which country won the first ever World Cup in 1930?",
    answers: {
      optn1: "Australia",
      optn2: "England",
      optn3: "Spain",
      optn4: "Uruguay",
    },
    correctAns: 4,
  },
  {
    question:
      "Can you name the former Germany international who went on to become a professional wrestler in the WWE?",
    answers: {
      optn1: "Tim Wiese",
      optn2: "Dwayne Johnson",
      optn3: "Roman Reigns",
      optn4: "Brock Lesnar",
    },
    correctAns: 1,
  },
  {
    question: "Which former Tottenham manager has competed in the Dakar Rally?",
    answers: {
      optn1: "Harry Kane",
      optn2: "Hugo Lloris",
      optn3: "Andre Villas-Boas",
      optn4: "Eric Dier",
    },
    correctAns: 3,
  },
  {
    question:
      "English rock star Elton John was twice the owner of which football club?",
    answers: {
      optn1: "Watford",
      optn2: "Liverpool",
      optn3: "Leeds United",
      optn4: "Everton",
    },
    correctAns: 1,
  },
  {
    question:
      "Rangers tried to sign which superstar after Alex McLeish was alerted to his ability through popular video game Football Manager?",
    answers: {
      optn1: "Cristiano Ronaldo",
      optn2: "Lionel Messi",
      optn3: "Pogba",
      optn4: "Eden Hazard",
    },
    correctAns: 2,
  },
  {
    question:
      "Which Portuguese team did Ronaldo play for before signing for Manchester United?",
    answers: {
      optn1: "Sporting",
      optn2: "FC Barcelona",
      optn3: "Manchester United",
      optn4: "Manchester City",
    },
    correctAns: 1,
  },
  {
    question: "Who is the Champions League's top goalscorer of all time?",
    answers: {
      optn1: "Mohamed Salah",
      optn2: "Neymar Jr",
      optn3: "Lionel Messi",
      optn4: "Cristiano Ronaldo",
    },
    correctAns: 4,
  },
  {
    question:
      "Ronaldo helped Portugal win the European Championship in which year?",
    answers: {
      optn1: "2020",
      optn2: "2016",
      optn3: "2012",
      optn4: "2008",
    },
    correctAns: 2,
  },
  {
    question:
      "Which German multinational sportswear company is Messi an ambassador for?",
    answers: {
      optn1: "Nike",
      optn2: "Gucci",
      optn3: "Adidas",
      optn4: "Fila",
    },
    correctAns: 3,
  },
  {
    question:
      "In which year did the European Championship expand from 16 teams to 24 teams?",
    answers: {
      optn1: "Euro 2016",
      optn2: "Euro 2012",
      optn3: "World Cup 2014",
      optn4: "World Cup 2018",
    },
    correctAns: 1,
  },
];

// Question numbers increases variable
const increaseNum = document.querySelector("#increase-questions");

// Question points increases variable
const increaseQuizScore = document.querySelector("#increase-points");

// varibale for Quiz Questions
const quizQuestionElem = document.querySelector(".quiz-questions");

// Quiz Answers variable
const multipleChoiceBtn = document.querySelectorAll(".multiple-choices-answers");

// After the user has answerd all the questions it will give them options of restart and home button
const quizResult = document.querySelector(".quiz-result");

// Display result
const displayUsersReviewText = document.querySelector(".review-users");
const showResult = document.querySelector("#show-result");

// Keep a tracks of current questions
let currentQuestion = {};

let acceptAnswers = false;

// keep a track of question that user has answered
let questionsCount;

//"points" is created to increase a users points
let points;

// "calculateTotalCorrectAnswers" is created to caluclate total correct result of user
let calculateTotalCorrectAnswers;

// Duplicate of array object "quizQuestions"
let duplicateQuizQuestions = [];

const CORRECT_ANSWER_POINTS = 100;

/**
 * As soon as quiz starts
 */
function startQuiz() {
  duplicateQuizQuestions = [...quizQuestions];
  points = 0;
  questionsCount = 0;
  calculateTotalCorrectAnswers = 0;
  renderNextQuestion();
}

/**
 *  This function will be activated once the user has answered all the questions
 */
function renderNextQuestion() {
  if (duplicateQuizQuestions.length === 0) {
    renderFinalResult();
    return;
  }

  questionsCount++;
  increaseNum.innerHTML = questionsCount;
  let generatesQuestionsIndex = generatesRandomQuestions();
  currentQuestion = duplicateQuizQuestions[generatesQuestionsIndex];
  quizQuestionElem.innerHTML = currentQuestion.question;

  multipleChoiceBtn.forEach(function (btns) {
    let btnsValue = btns.getAttribute("data-value");
    btns.innerHTML = currentQuestion.answers["optn" + btnsValue];
  });

  duplicateQuizQuestions.splice(generatesQuestionsIndex, 1);

  acceptAnswers = true;
}

/**
 * A user's review page. Users will see this page after answering all the questions
 */
function renderFinalResult() {
  if (calculateTotalCorrectAnswers >= 8) {
    showResult.innerHTML = "Well done! You're a real football fan 😎";
  } else if (calculateTotalCorrectAnswers >= 5) {
    showResult.innerHTML = "you should try again!🤔";
  } else {
    showResult.innerHTML = "better luck next time!😩";
  }
  overlayPage();

  /* This part of the quiz was built with help from a florin pop YouTube video. The link can be found in the readme.*/
  quizResult.innerHTML = `<h1>You answerd ${calculateTotalCorrectAnswers} out of ${quizQuestions.length}</h1> <p>Press the restart button below to try again👇<p> <button class="end-page-btn" onclick="window.location.assign('index.html')">Home</button> <button class="end-page-btn" onclick="location.reload()">Restart</button>`;
  return undefined;
}

multipleChoiceBtn.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    if (!acceptAnswers) return;

    acceptAnswers = false;

    let usersSelects = e.currentTarget;

    let usersSelectedValue = usersSelects.getAttribute("data-value");

    // Compares users selected value and correct answer
    let checkIfTrue =
      parseInt(usersSelectedValue) === currentQuestion.correctAns ?
           "correct-answer"
        : "incorrect-answer";

    if (checkIfTrue === "correct-answer") {
      calculateTotalCorrectAnswers++;
      increaseUsersPoints(points);
    }

    usersSelects.classList.add(checkIfTrue);

    setTimeout(function () {
      usersSelects.classList.remove(checkIfTrue);
      renderNextQuestion();
    }, 800);
  });
});

/**
 * This function will increases users points if their answer is correct
 */
function increaseUsersPoints() {
  points = points + CORRECT_ANSWER_POINTS;
  increaseQuizScore.innerHTML = points;
}

/**
 * Generates random questions in this function
 */
function generatesRandomQuestions() {
  return Math.floor(Math.random() * duplicateQuizQuestions.length);
}

/**
 * This fucntion is for popup page for Quiz result
 */
function overlayPage() {
  displayUsersReviewText.style.display =
    displayUsersReviewText.style.display === "block" ? "none" : "block";
}

startQuiz();
