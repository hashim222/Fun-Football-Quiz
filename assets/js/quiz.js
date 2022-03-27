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
 * Duplicate of array object "myQuestions"
 */
let duplicateMyQuestions = [];

/**
 * as soon as quiz starts
 */
function startQuiz() {
  duplicateMyQuestions = [...myQuestions];
  points = 100;
  questionsCount = 0;
  footballGameData();
}
function footballGameData() {
  let generatesIndex = generatesRandomQuiz();
  currentQuestion = duplicateMyQuestions[generatesIndex];
  quizQuestionValue.innerHTML = currentQuestion.question;
  multipleBtnsInQuiz.forEach(function (btns) {
  /**
   * variable for "data-value" attribute from inside the html 
   */
  let btnsValue = btns.getAttribute('data-value')
   btns.innerHTML = currentQuestion.answers['optn' + btnsValue]
});
}
/**
 * generates random questions in this
 */
function generatesRandomQuiz() {
  let randomGenerates = Math.floor(Math.random() * myQuestions.length);
  return randomGenerates;
}
startQuiz();

