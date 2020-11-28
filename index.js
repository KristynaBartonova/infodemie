//const definované a vytažené skrze getElementById//
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
console.log('funguju');

// const answerButtonsElement = document.getElementById('answer-buttons');

//priprava fce - chci aby se mi měnili otázky a zároveň chci vědět, na jakém i otázka zrovna je // let místo const - aby to mohlo být redefinováno//
// let shuffledQuestions, currentQuestionIndex;

// //spusteni hry//
// startGame = () => {
//   startButton.classList.add('hide');
//   shuffledQuestions = questions.sort(() => Math.random() - 0.5);
//   currentQuestionIndex = 0;
//   questionContainerElement.classList.remove('hide');
//   setNextQuestion();
// };

// //posluchač události - startButton + anonymní fce na nextButton//
// startButton.addEventListener('click', startGame);
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++;
//   setNextQuestion();
// });

// //nastavení další otázky//
// setNextQuestion = () => {
//   resetState();
//   showQuestion(shuffledQuestions[currentQuestionIndex]);
// };

// // fce showQuestion, plním//
// showQuestion = (question) => {
//   questionElement.innerText = question.question;
//   question.answers.forEach((answer) => {
//     const button = document.createElement('button');
//     button.innerText = answer.text;
//     button.classList.add('btn');
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener('click', selectAnswer);
//     answerButtonsElement.appendChild(button);
//   });
// };
// // resetuju stav - aby se mi neukazovaly zbytečné elementy//
// resetState = () => {
//   clearStatusClass(document.body);
//   nextButton.classList.add('hide');
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//   }
// };

// //vybrat odpověď, zkontrolovat jestli je správná, natavení NEXT/RESTART//
// selectAnswer = (e) => {
//   const selectedButton = e.target;
//   const correct = selectedButton.dataset.correct;
//   setStatusClass(document.body, correct);
//   Array.from(answerButtonsElement.children).forEach((button) => {
//     setStatusClass(button, button.dataset.correct);
//   });
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide');
//   } else {
//     startButton.innerText = 'Restart';
//     startButton.classList.remove('hide');
//   }
// };

// //přidání tříd pro správnou a špatnou odpověď//
// setStatusClass = (element, correct) => {
//   clearStatusClass(element);
//   if (correct) {
//     element.classList.add('correct');
//   } else {
//     element.classList.add('wrong');
//   }
// };

// //odebrat třídu correct/wrong//
// clearStatusClass = (element) => {
//   element.classList.remove('correct');
//   element.classList.remove('wrong');
// };

// // //pole objektů//
// const questions = [
//   {
//     question: 'Kolik je 2 + 2?',
//     answers: [
//       { text: '4', correct: true },
//       { text: '22', correct: false },
//     ],
//   },
//   {
//     question: 'Jak se dneska máte?',
//     answers: [
//       { text: 'Dobře', correct: true },
//       { text: 'Chce to vínko', correct: true },
//       { text: 'Jde to', correct: true },
//       { text: 'Úžasně', correct: true },
//     ],
//   },
//   {
//     question: 'Kolik je 33*3?',
//     answers: [
//       { text: 'To nemám páru', correct: false },
//       { text: '99', correct: true },
//       { text: '333', correct: false },
//       { text: 'Hvězdička', correct: false },
//     ],
//   },
//   {
//     question: 'Kolik je 4 * 2?',
//     answers: [
//       { text: '6', correct: false },
//       { text: '8', correct: true },
//     ],
//   },
// ];

// TADY je JSON a uložená data - otázky a odpovědi

data = [
  {
    question: 'Kolik je 2 + 2?',
    answers: {
      a: '4',
      b: '22',
    },
    correctAnswer: 'a',
  },

  {
    question: 'Jak se dneska máte?',
    answers: {
      a: 'Dobře',
      b: 'Chce to vínko',
      c: 'Jde to',
      d: 'Úžasně',
    },
    correctAnswer: 'b',
  },
  {
    question: 'Kolik je 33*3?',
    answers: {
      a: 'To nemám páru',
      b: '99',
      c: '333',
      d: 'Hvězdička',
    },
    correctAnswer: 'b',
  },
  {
    question: 'Kolik je 4 * 2?',
    answers: {
      a: '6',
      b: '8',
      c: '12',
      d: '5',
    },
    correctAnswer: 'b',
  },
];

// uložení otázek do proměnné

// Added by ZS - end
const questionsSetString = JSON.stringify(data);
const questionsSet = JSON.parse(questionsSetString);
// Added by ZS - end

data.questionsSet = Question(questionsSet.question);

const questionsSet = JSON.parse(data);

data.questionsSet = question(questionsSet.question);

questionContainerElement.innerHTML =
  questionsSet.question + questionsSet.answer;

// začátek hry - celá funkce
startGame = () => {
  // tady by měl začít kvíz

  startQuize = () => {
    // proměnná pro vložení HTML výstupu
    const output = [];
  };

  // proměnná, která bude kontrolovat odpovědi
  const correctAnswers = [];
};
