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

/**
 * Question number increase variable
 */
let increaseQuestionsNum = document.querySelector("#increase-questions");
/**
 * Question points increase variable
 */
let increaseQuizScore = document.querySelector("#increase-points");
/**
 * varibale for Quiz Questions
 */
let quizQuestionValue = document.querySelector(".quiz-questions");
/**
 * Answers variable
 */
let multipleBtnsInQuiz = document.querySelectorAll(".multiple-choices-answers");

let quizResult = document.querySelector(".quiz-result");
/**
 * Empty object brackets
 */
let currentQuestion = {};
/**
 * keep a track of question user has answerd
 */
let questionsCount;
/**
 * "points" is created to increases users points
 */
let points;
/**
 * "calculateTotalCorrectAnswers" is created to caluclate total correct result of user
 */
let calculateTotalCorrectAnswers;
/**
 * Duplicate of array object "myQuestions"
 */
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
let TOTAL_ANSWERS = 10;
function footballGameData() {
  /**
   * After the last question answered, this statement will try to restart the quiz questions
   */
  if (duplicateMyQuestions.length === 0 ||
    questionsCount > myQuestions.length){
    return (quizResult.innerHTML = `<h1>You answerd ${calculateTotalCorrectAnswers} out of ${TOTAL_ANSWERS}</h1>`);
  }
  questionsCount++;
  increaseQuestionsNum.innerHTML = questionsCount;
  let generatesIndex = generatesRandomQuiz();
  currentQuestion = duplicateMyQuestions[generatesIndex];
  quizQuestionValue.innerHTML = currentQuestion.question;
  multipleBtnsInQuiz.forEach(function (btns) {
    /**
     * variable for "data-value" attribute from inside the html
     */
    let btnsValue = btns.getAttribute("data-value");
    btns.innerHTML = currentQuestion.answers["optn" + btnsValue];
  });
  /**
   * This will prevent repeating the previous questions
   */
  duplicateMyQuestions.splice(generatesIndex, 1);
}
multipleBtnsInQuiz.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    /**
     * Gets current value from innerhtml when clicked
     */
    let usersSelects = e.currentTarget;
    /**
     * gets the value from the inside of "data-value" attribute
     */
    let usersSelectedValue = usersSelects.getAttribute("data-value");
    /**
     * compares users selected value and correct answer
     */
    let checkIfTrue =
      parseInt(usersSelectedValue) === currentQuestion.correctAns
        ? "correct-answer"
        : "incorrect-answer";
    /**
     * this statments checks the value if the answer is correct increase points
     */
    if (checkIfTrue === "correct-answer") {
      increaseUsersPoints(points);
    }
    /**
     * this statments checks the value if the answer is correct increase questions
     */
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
startQuiz();
