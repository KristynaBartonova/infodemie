'use strict';

console.log('funguju');

//const definované a vytažené skrze getElementById//

// spouštěcí button
const startButton = document.getElementById('start-btn');

// další krok v otázkách
const nextButton = document.getElementById('next-btn');

// celý kontejner, kde se mají zobrazovat javascriptové otázky - div, který obaluje všechny ostatní ID questionContainerElement
const quizContainer = document.getElementById('questioan-container');
// div vypisující otázky - následně změníme na h2
const questionElement = document.getElementById('question');
// odpovědi se vypisují do button  answerButtonsElement
const answerButtonsElement = document.getElementById('answer-buttons');

//priprava fce - chci aby se mi měnili otázky a zároveň chci vědět, na jakém i otázka zrovna je // let místo const - aby to mohlo být redefinováno//
// let shuffledQuestions, currentQuestionIndex;

// //spusteni hry//
// startGame = () => {
//   startButton.classList.add('hide');
//   shuffledQuestions = data.question.sort(() => Math.random() - 0.5);
//   currentQuestionIndex = 0;
//   quizContainer.classList.remove('hide');
//   setNextQuestion();
//   return console.log('hra se spustí, co teď? Spíš se hra nespustí :D');
// };

// //posluchač události - startButton + anonymní fce na nextButton//
// startButton.addEventListener('click', startGame);
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++;
//   setNextQuestion();
// });

//nastavení další otázky//
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

//odebrat třídu correct/wrong//
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

const data = {
  fakeNews: [
    {
      question: 'Mám ráda zeleninu?',
      a: 'Ano',
      b: 'Ne',
      answer: 'a',
    },
    {
      question: 'Bude dneska pršet?',
      a: 'Ano',
      b: 'Ne',
      answer: 'b',
    },
  ],
  internet: [
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
      question: 'Jak se dneska máte?',
      answers: {
        a: 'a',
        b: 't',
        c: 'f',
        d: 'g',
      },
      correctAnswer: 'c',
    },
    {
      question: 'Jak se dneska máte?',
      answers: {
        a: 'Dobrý',
        b: 'Chce to vínko',
        c: 'Jde to',
        d: 'Úžasně',
      },
      correctAnswer: 'd',
    },
  ],
  hoax: [
    {
      question: 'Jak se dneska máte?',
      answers: {
        a: 'Dobře',
        b: 'Chce to vínko',
        c: 'Jde to, ale dřeto',
        d: 'Úžasně',
      },
      correctAnswer: 'c',
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
  ],
};

// uložení otázek do proměnné

// Added by ZS - end
const questionsSetString = JSON.stringify(data);
const questionsSet = JSON.parse(questionsSetString);
// Added by ZS - end

// const questionsSet = JSON.parse(data);

// data.questionsSet = question(questionsSet.question);

// quizContainer.innerHTML = questionsSet.question[] + questionsSet.answer[];

startQuize = () => {
  // proměnná pro vložení HTML výstupu
  const output = [];

  // proměnná, která bude zaznamenávat odpovědi
  const correctAnswers = [];

  // proměnná, kam se budou zaznamenávat odpovědi uživatele, když na něco klikne
  const userAnswer = [];
};
