'use strict';

console.log('funguju');
// TADY je JSON a uložená data - otázky a odpovědi - bude následně v samostatném dokumentu data.json

const data = { [
  // fakeNews
   [
    {
      question: 'Mám ráda zeleninu?',
      answers: ['Ano', 'Ne'],
      indexOfCorrect: 0,
    },
    {
      question: 'Bude dneska pršet?',
      answers: ['Ano', 'Ne'],
      indexOfCorrect: 1,
    }
  ]
  // internet
   [
    {
      question: 'Jak se dneska máte?',
      answers: ['Dobrý', 'Nicmoc', 'Nefunguje mi kód', 'Skvělý'],
      indexOfCorrect: 2,
    },
    {
      question: 'Jak se dneska máte?',
      answers: ['Paráda', 'Jde to', 'Dře to', 'Nejde to'],
      indexOfCorrect: 3
    },
    {
      question: 'Jak se dneska máte?',
      answers: ['Dobrý', 'Chce to vínko', 'Jde to', 'Úžasně'],
      indexOfCorrect: 0,
    }
  ]
  // hoax: 
  [
    {
      question: 'Jak se dneska máte?',
      answers: ['Chce to vínko', 'Dobře', 'Jde to, ale dřeto', 'Úžasně'],
      indexOfCorrect: 3,
    },
    {
      question: 'Kolik je 33*3?',
      answers: ['99', 'To nemám páru', '333', 'Hvězdička'],
      indexOfCorrect: 1,
    },
    {
      question: 'Kolik je 4 * 2?',
      answers: ['6', '8', '1', '5'],
      indexOfCorrect: 1,
    }
  ]
]


//const definované a vytažené skrze getElementById//

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

const generate = () => {
  questionElement.innerHTML = JSONdata.[].question;
  answersElement.innerHTML = JSONdata.[].answers;
};

// mělo by projít všechny tři sekce
JSONdata.forEach(generate());

// funkce kontroluje správnost otázky - zakliknutý button zkontroluje s daty z JSONU - momentálně nefunguje, je třeba předělat na novou data strukturu

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

JSONdata.forEach(checkAnswer());

// data od uživatele se mi budou ukládat sem, mohlo by to být prázdné pole, ale protože máme určité sekce je třeba to mít lépe definováno

const userAnswers = { fakeNews: [], internet: [], hoax: [] };
