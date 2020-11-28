'use strict';

console.log('funguju');
// TADY je JSON a uložená data - otázky a odpovědi

const JSONdata = {
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

const answersElement = document.getElementById('answer-buttons');

const questionElement = document.getElementById('question');

// upraví JSON data na původní strukturu, kterou vymazává prettier

const questionsSetString = JSON.stringify(JSONdata);
const questionsSet = JSON.parse(questionsSetString);

// začáteční index
let i = 0;

// počet bodů na začátku

let correct = 0;

// vygeneruje otázku z datasetu

const generate = (index) => {
  questionElement.innerHTML = JSONdata[index].question;
  answersElement.innerHTML = JSONdata[index].answers;
};

// mělo by projít všechny tři sekce
JSONdata.forEach(generate());

// funkce kontroluje správnost otázky - zakliknutý button zkontroluje s daty z JSONU

const checkAnswer = () => {
  if (
    answersElement.event.target === JSONdata[index].answers &&
    JSONdata[index].correctAnswers
  ) {
    correct++;
  }
  // zavolá další otázku
  i++;
  if (JSONdata.length - 1 < i) {
    element.classList.add('correct');
    document.write(`"Vaše skóre v sekci ' + 'je ' correct + '.`);
  }

  generate(i);
};

data.forEach(checkAnswer());
