/**
 * All the Questions and Answers in this array object
 */
 let myQuestions = [
  {
    question: "Which country won the first ever World Cup in 1930?",
    answers: ["Australia", "England", "Spain", "Uruguay"],
    correctAns: 4,
  },
  {
    question:
      "Can you name the former Germany international who went on to become a professional wrestler in the WWE?",
    answers: ["Tim Wiese", "Dwayne Johnson", "Roman Reigns", "Brock Lesnar"],
    correctAns: 1,
  },
  {
    question: "Which former Tottenham manager has competed in the Dakar Rally?",
    answers: [ "Harry Kane", "Hugo Lloris", "Andre Villas-Boas", "Eric Dier",
    ],
    correctAns: 3,
  },
  {
    question:
      "English rock star Elton John was twice the owner of which football club?",
    answers: [
     "Watford",
     "Liverpool",
     "Leeds United",
     "Everton",
    ],
    correctAns: 1,
  },
  {
    question:
      "Rangers tried to sign which superstar after Alex McLeish was alerted to his ability through popular video game Football Manager?",
    answers: [
     "Cristiano Ronaldo",
     "Lionel Messi",
     "Pogba",
     "Eden Hazard",
    ],
    correctAns: 2,
  },
  {
    question:
      "Which Portuguese team did Ronaldo play for before signing for Manchester United?",
    answers: [
      "Sporting",
      "FC Barcelona",
      "Manchester United",
      "Manchester City",
    ],
    correctAns: 1,
  },
  {
    question: "Who is the Champions League's top goalscorer of all time?",
    answers: [
       "Mohamed Salah",
       "Neymar Jr",
       "Lionel Messi",
       "Cristiano Ronaldo",
],
    correctAns: 4,
  },
  {
    question:
      "Ronaldo helped Portugal win the European Championship in which year?",
    answers: [
       "2020",
       "2016",
       "2012",
       "2008",
    ],
    correctAns: 2,
  },
  {
    question:
      "Which German multinational sportswear company is Messi an ambassador for?",
    answers: [
      "Nike",
      "Gucci",
      "Adidas",
      "Fila",
    ],
    correctAns: 3,
  },
  {
    question:
      "In which year did the European Championship expand from 16 teams to 24 teams?",
    answers: [
       "Euro 2016",
       "Euro 2012",
       "World Cup 2014",
       "World Cup 2018",
    ],
    correctAns: 1,
  },
];
// variables for quiz info btns
let openHiddenTextBtn = document.querySelector(".btn-for-overlay-page");
let showHiddenText = document.querySelector("#hidden-popup-text");
let closeHiddenTextBtn = document.querySelector(".fa-xmark");

// username variable
let enterUser = document.querySelector("#enter-user");
let saveUser = document.querySelector("#save-user");

//quiz questions varibale
const quizQuestionValue = document.querySelector(".quiz-questions");
//quiz answers varibale
const quizAnsValue1 = document.querySelector(".btn1");
const quizAnsValue2 = document.querySelector(".btn2");
const quizAnsValue3 = document.querySelector(".btn3");
const quizAnsValue4 = document.querySelector(".btn4");


let currantQuestions = 2

function questionsData(){
  let totalQuestions = myQuestions[currantQuestions]
  quizQuestionValue.innerHTML = totalQuestions.question
  quizAnsValue1.innerHTML = totalQuestions.answers[0]
  quizAnsValue2.innerHTML = totalQuestions.answers[1]
  quizAnsValue3.innerHTML = totalQuestions.answers[2]
  quizAnsValue3.innerHTML = totalQuestions.answers[3]
}
questionsData()


let totalBtns = document.querySelectorAll('.multiple-choices-answers')
for(let btns of totalBtns){
  btns.addEventListener('click', function(){
    currantQuestions++
    questionsData()
  })
}

/**
 * when the user clicks on "quiz info" button, popup page will appear.
 */
 function overlayPage() {
  if (showHiddenText.style.display === "block") {
    showHiddenText.style.display = "none";
  } else {
    showHiddenText.style.display = "block";
  }
}
openHiddenTextBtn.addEventListener("click", overlayPage);
// when user wanna exit from quiz info.
closeHiddenTextBtn.addEventListener("click", overlayPage);

// save the username in quiz.
function saveUserName() {
  alert(`tnx! for sigining in, ${enterUser.value}`);
}
saveUser.addEventListener("click", saveUserName);

let quizQuestions = document.querySelector(".quiz-questions");
console.log(quizQuestions);



























