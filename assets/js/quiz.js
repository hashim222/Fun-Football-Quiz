/**
 * All the Questions and Answers data stored in this array object
 */
 let myQuestions = [
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

// Question number increase variable
const increaseQuestionsNum = document.querySelector("#increase-questions");

// Question points increase variable
const increaseQuizScore = document.querySelector("#increase-points");

// varibale for Quiz Questions
const quizQuestionElem = document.querySelector(".quiz-questions");

// Answers variable
const multipleBtnsInQuiz = document.querySelectorAll(".multiple-choices-answers");

// after the user has answerd all the questions it will give them options of restart and home button
const quizResult = document.querySelector(".quiz-result");

// display result
const displayUsersReviewText = document.querySelector(".review-users");
const showResult = document.querySelector("#show-result");

// Empty object brackets
let currentQuestion = {};

// keep a track of question user has answerd
let questionsCount;

//"points" is created to increases users points
let points;

// "calculateTotalCorrectAnswers" is created to caluclate total correct result of user
let calculateTotalCorrectAnswers;

// Duplicate of array object "myQuestions"
let duplicateMyQuestions = [];

/**
 * as soon as quiz starts
 */
function startQuiz() {
  duplicateMyQuestions = [...myQuestions];
  points = 0;
  questionsCount = 0;
  calculateTotalCorrectAnswers = 0;
  footballGameData();
}

/**
 *  This function will be activated once the user has answered all the questions
 */
function footballGameData() {
  let TOTAL_ANSWERS = 10;
  if (duplicateMyQuestions.length === 0) {
    if (calculateTotalCorrectAnswers >= 8) {
      showResult.innerHTML = "Well done! You're a real football fan😎";
      overlayPage();
    } else if (calculateTotalCorrectAnswers >= 5) {
      showResult.innerHTML = "you should try again!🤔";
      overlayPage();
    } else {
      showResult.innerHTML = "better luck next time!😩";
      overlayPage();
    }

    /**
     * this fucntion delays time out after user see their result text
     */
      setTimeout(function(){
        overlayPage();
      }, 5000)
     quizResult.innerHTML = `<h1>You answerd ${calculateTotalCorrectAnswers} out of ${TOTAL_ANSWERS}</h1> <p>Press the restart button below to try again👇<p> <button class="end-page-btn" onclick="window.location.assign('index.html')">Home</button> <button class="end-page-btn" onclick="location.reload()">Restart</button>`;
     return undefined
    }

  questionsCount++;
  increaseQuestionsNum.innerHTML = questionsCount;
  let generatesIndex = generatesRandomQuiz();
  currentQuestion = duplicateMyQuestions[generatesIndex];
  quizQuestionElem.innerHTML = currentQuestion.question;

  // multiple btns stored inside 'btns'
  multipleBtnsInQuiz.forEach(function (btns) {
    let btnsValue = btns.getAttribute("data-value");
    btns.innerHTML = currentQuestion.answers["optn" + btnsValue];
  });

  // This will prevent repeating the previous questions
  duplicateMyQuestions.splice(generatesIndex, 1);
}

multipleBtnsInQuiz.forEach((btns) => {
  btns.addEventListener("click", function (e) {

    // Gets current value from innerhtml when clicked
    let usersSelects = e.currentTarget;

    // gets the value from the inside of "data-value" attribute
    let usersSelectedValue = usersSelects.getAttribute("data-value");

    // compares users selected value and correct answer
    let checkIfTrue =
      parseInt(usersSelectedValue) === currentQuestion.correctAns ?
         "correct-answer"
        : "incorrect-answer";

    if (checkIfTrue === "correct-answer") {
      increaseUsersPoints(points);
    }

    if (checkIfTrue === "correct-answer") {
      increaseQuestionsResultInTotal();
    }

    usersSelects.classList.add(checkIfTrue);
    /**
     * setTimeout fucntion was added to slow down speed for next question
     */
    setTimeout(function () {
      usersSelects.classList.remove(checkIfTrue);
      footballGameData();
    }, 800);
  });
});

/**
 * this function will increases users points if their answer is correct
 */
function increaseUsersPoints() {
  let increasePoints = 100;
  points = points + increasePoints;
  increaseQuizScore.innerHTML = points;
  return increasePoints;
}

/**
 *  this function will increases users correct questions if their answer is correct
 */
function increaseQuestionsResultInTotal() {
  let calculateResult = 1;
  calculateTotalCorrectAnswers = calculateTotalCorrectAnswers + calculateResult;
  return calculateResult;
}

/**
 * generates random questions in this function
 */
function generatesRandomQuiz() {
  let randomGenerates = Math.floor(Math.random() * duplicateMyQuestions.length);
  return randomGenerates;
}

/**
 * This fucntion is for popup page for Quiz result
 */
function overlayPage() {
  if (displayUsersReviewText.style.display === "block") {
    displayUsersReviewText.style.display = "none";
  } else {
    displayUsersReviewText.style.display = "block";
  }
}

startQuiz();
