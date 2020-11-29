'use strict';

console.log('funguju');
// TADY je JSON a uložená data - otázky a odpovědi - bude následně v samostatném dokumentu data.json

// Nejspíš bylo by jednodušší to přepsat na POLE a ty následně budu procházet indexem - mohlo by to vyřešit problém, který je ve funkci generate, protože to neprochází všechny otázky a někde se to zasekává, neukazují se všechny. Je třeba to vyřešit.

// Taky už je možné, to lépe nastylovat a přidat do celého kódu například POPUPY, které zapnou jednotlivé funkce viz níže, aby byla stránka více interaktivní - MOŽNÁ MÍSTO POPUPŮ NĚJAKÁ animace?

const JSONdata = [
  {
    id: 0,
    topic: 'Fake news',
    questions: [
      {
        id: 0,
        question: 'Is the fakenews really fakenews?',
        answers: [
          {
            id: 0,
            answer: 'Yes',
          },
          {
            id: 1,
            answer: 'No',
          },
          {
            id: 2,
            answer: 'lol',
          },
        ],
        correctAnswer: 0,
      },
      {
        id: 1,
        question: 'Kolik je 4 * 2?',
        answers: [
          {
            id: 0,
            answer: '6',
          },
          {
            id: 1,
            answer: '8',
          },
          {
            id: 2,
            answer: '1',
          },
          {
            id: 3,
            answer: '5',
          },
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 1,
    topic: 'Hoax',
    questions: [
      {
        id: 0,
        question: 'Hoax lol wtf omg',
        answers: [
          {
            id: 0,
            answer: 'Yes',
          },
          {
            id: 1,
            answer: 'No',
          },
          {
            id: 2,
            answer: 'lol',
          },
        ],
        correctAnswer: 0,
      },
      {
        id: 1,
        question: 'Kolik je 666 * 1?',
        answers: [
          {
            id: 0,
            answer: '1',
          },
          {
            id: 1,
            answer: '2',
          },
          {
            id: 2,
            answer: '3',
          },
          {
            id: 3,
            answer: '666',
          },
        ],
        correctAnswer: 3,
      },
    ],
  },
  {
    id: 2,
    topic: 'Internet',
    questions: [
      {
        id: 0,
        question: 'Jak se dneska máš?',
        answers: [
          {
            id: 0,
            answer: 'Dobře',
          },
          {
            id: 1,
            answer: 'Špatně',
          },
          {
            id: 2,
            answer: 'Chce to vínko',
          },
          {
            id: 3,
            answer: 'nevím',
          },
        ],
        correctAnswer: 3,
      },
      {
        id: 1,
        question: 'Kolik je 4 * 1?',
        answers: [
          {
            id: 0,
            answer: '6',
          },
          {
            id: 1,
            answer: '8',
          },
          {
            id: 2,
            answer: '4',
          },
          {
            id: 3,
            answer: '1',
          },
        ],
        correctAnswer: 2,
      },
    ],
  },
];
//const definované a vytažené skrze getElementById//

const answersElement = document.getElementById('answer-buttons');
const startButton = document.getElementById('start-btn');
const questionElement = document.getElementById('intro');
const nextButton = document.getElementById('next-btn');
const quizContainer = document.getElementById('question-container');

// upraví JSON data na původní strukturu, kterou vymazává prettier

const questionsSetString = JSON.stringify(JSONdata);
const questionsSet = JSON.parse(questionsSetString);

// určuje téma

const numberOfTopics = JSONdata.length - 1;

// tady se spouští hra

const startGame = () => {
  startButton.remove();
  generate(actualQuestion);
  return console.log('hra se spustila');
};

// posluchače událostí, které spouští hru

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  generate(actualQuestion);
});

// definice aktuální otázky, která má začínat, vždy začíná na nule - následně se připisuje, viz. níže

let actualQuestion = {
  topicId: 0,
  questionId: 0,
};

// tady se mapují odpovědi uživatele - funkce map prjede odpovědi, které následně porovná se správnými odpověďmi
// sem se budou zapisovat odpovědi od uživatele

let userAnswers = JSONdata.map((topic) => ({
  topicId: topic.id,
  correctAnswers: 0,
}));

// tohle nakonci vypisuje projité odpovědi a řekne uživateli správné výsledky.
//  Chtělo by to přidat další DOM elementy, možná přidat pop up, do kterého to zapíše. Chtělo by to následně přidat do DOM elementu i odkaz. Je potřeba ještě vygooglit. Možná vyřešit v POPUPU
const printResults = () => {
  const box = document.getElementById('question-container');
  box.innerHTML = '';

  // prochází uživatelské odpovědi, které se zapisují
  userAnswers.forEach((userAnswer) => {
    // prochází téma v JSONU - téma by se mělo rovnat uživatelské odpovědi tématu
    const topic = JSONdata.find((topic) => topic.id === userAnswer.topicId);
    // vytvářím si odstavec, do kterého následně vypíšu téma
    const score = document.createElement('p');
    score.innerHTML += FinalButton;
    score.style.color = 'green';
    // paragraf se přidá
    box.append(score);
  });
};

// tahle funkce mění otázky

const changeQuestion = () => {
  // vybere téma pomocí funkce find a porovná to s témate aktuálně zvolené otázky
  const topic = JSONdata.find((topic) => topic.id === actualQuestion.topicId);
  // kontroluju, jestli vybrané téma není poslední
  if (actualQuestion.topicId < numberOfTopics) {
    console.log('not last topic');
    // následně se tady kontroluje, zda i vybraná otázka není poslední
    if (actualQuestion.questionId < topic.questions.length - 1) {
      actualQuestion.questionId++;
    } else {
      // pokud program není nakonci přidává se další otázka
      actualQuestion.topicId++;
      actualQuestion.questionId = 0;
    }
    generate(actualQuestion);
  } else {
    // pokud program dojde na konec vypíše uživatelské odpovědi do konzole, ale také je vypíše na stránky
    if (actualQuestion.questionId < topic.questions.length - 1) {
      actualQuestion.questionId++;
      generate(actualQuestion);
    } else {
      printResults();
    }
  }
};

// hledání otázek a odpovědí z JSON struktury
const generate = (actualQuestion) => {
  answersElement.innerHTML = '';
  // tady si definuji téma, které se vybeere díky JSON stuktuře, kterou projede funkce find viz výše
  const topic = JSONdata.find((topic) => topic.id === actualQuestion.topicId);
  // tady si definuji otázku a kde ji najdu
  const question = topic.questions.find(
    (question) => question.id === actualQuestion.questionId,
  );
  // tady si definuji ID správné odpovědi a kde se nachází
  const correctAnswerId = question.correctAnswer;
  // tady vypisuji na stránku otázku
  questionElement.innerHTML = question.question;

  // forEach cykl, který přidává odpovědi i s buttony
  question.answers.forEach((answer) => {
    // vytvoří se button a následně se mu přidá nastylovaná třída
    const button = document.createElement('button');
    button.classList.add('btn');
    // vypíše otázky na stránku
    button.innerHTML = answer.answer;
    // pomocí posluchače událostí se označují odpovědi
    button.onclick = () => {
      const clickedAnswerId = answer.id;
      // kontroluje správnost otázky a následně ji přidává do uživatelských odpovědí, pokud je správná zobrazí se následně uživateli - je třeba to následně nastylovat viz styly
      if (clickedAnswerId === correctAnswerId) {
        userAnswers = userAnswers.map((userAnswer) => {
          if (userAnswer.topicId === actualQuestion.topicId) {
            userAnswer.correctAnswers++;
          }
          return userAnswer;
        });
      }
      changeQuestion();
    };

    answersElement.appendChild(button);
  });
};

const FinalButton = () => {
  return `
  <p>V tématu ${topic.topic} jste získali následující počet bodů: ${userAnswer.correctAnswers}.</p>
  <button class="final-btn"><a href="${props.topic}">Více Informací o tématu<a/></button>
    `;
};
