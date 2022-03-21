/**
 * All the Questions and Answers in this array object
 */
 let myQuestions = [
  {
    question: "Which country won the first ever World Cup in 1930?",
    answers: {
      1: "Australia",
      2: "England",
      3: "Spain",
      4: "Uruguay",
    },
    correctAns: 4,
  },
  {
    question:
      "Can you name the former Germany international who went on to become a professional wrestler in the WWE?",
    answers: {
      1: "Tim Wiese",
      2: "Dwayne Johnson",
      3: "Roman Reigns",
      4: "Brock Lesnar",
    },
    correctAns: 1,
  },
  {
    question: "Which former Tottenham manager has competed in the Dakar Rally?",
    answers: {
      1: "Harry Kane",
      2: "Hugo Lloris",
      3: "Andre Villas-Boas",
      4: "Eric Dier",
    },
    correctAns: 3,
  },
  {
    question:
      "English rock star Elton John was twice the owner of which football club?",
    answers: {
      1: "Watford",
      2: "Liverpool",
      3: "Leeds United",
      4: "Everton",
    },
    correctAns: 1,
  },
  {
    question:
      "Rangers tried to sign which superstar after Alex McLeish was alerted to his ability through popular video game Football Manager?",
    answers: {
      1: "Cristiano Ronaldo",
      2: "Lionel Messi",
      3: "Pogba",
      4: "Eden Hazard",
    },
    correctAns: 2,
  },
  {
    question:
      "Which Portuguese team did Ronaldo play for before signing for Manchester United?",
    answers: {
      1: "Sporting",
      2: "FC Barcelona",
      3: "Manchester United",
      4: "Manchester City",
    },
    correctAns: 1,
  },
  {
    question: "Who is the Champions League's top goalscorer of all time?",
    answers: {
      1: "Mohamed Salah",
      2: "Neymar Jr",
      3: "Lionel Messi",
      4: "Cristiano Ronaldo",
    },
    correctAns: 4,
  },
  {
    question:
      "Ronaldo helped Portugal win the European Championship in which year?",
    answers: {
      1: "2020",
      2: "2016",
      3: "2012",
      4: "2008",
    },
    correctAns: 2,
  },
  {
    question:
      "Which German multinational sportswear company is Messi an ambassador for?",
    answers: {
      1: "Nike",
      2: "Gucci",
      3: "Adidas",
      4: "Fila",
    },
    correctAns: 3,
  },
  {
    question:
      "In which year did the European Championship expand from 16 teams to 24 teams?",
    answers: {
      1: "Euro 2016",
      2: "Euro 2012",
      3: "World Cup 2014",
      4: "World Cup 2018",
    },
    correctAns: 1,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // quiz buttons stored in this variable
  let buttons = document.querySelectorAll(".btns");
  // looping through all the buttons
  for (let btn of buttons) {
    btn.addEventListener("click", function () {
      console.log(this);
    });
  }
});
// variables for quiz info btns
let openHiddenTextBtn = document.querySelector(".btn-for-overlay-page");
let showHiddenText = document.querySelector("#hidden-popup-text");
let closeHiddenTextBtn = document.querySelector(".fa-xmark");

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