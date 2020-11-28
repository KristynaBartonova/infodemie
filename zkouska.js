'use strict';

console.log('funguju');
// TADY je JSON a uložená data - otázky a odpovědi - bude následně v samostatném dokumentu data.json

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
];

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

const numberOfTopics = JSONdata.length - 1;

let actualQuestion = {
  topicId: 0,
  questionId: 0,
};

let userAnswers = [];

const changeQuestion = () => {
  const topic = JSONdata.find((topic) => topic.id === actualQuestion.topicId);

  if (actualQuestion.topicId < numberOfTopics) {
    if (actualQuestion.questionId < topic.questions.length - 1) {
      actualQuestion.questionId++;
    } else {
      actualQuestion.topicId++;
      actualQuestion.questionId = 0;
    }

    console.log(actualQuestion.topicId, actualQuestion.questionId);
    generate(actualQuestion);
  } else {
    console.log(userAnswers);
    alert("all topics are done");
  }
};
// hledání otázek a odpovědí z JSON struktury

const generate = (actualQuestion) => {
  const topic = JSONdata.find((topic) => topic.id === actualQuestion.topicId);
  const question = topic.questions.find(
    (question) => question.id === actualQuestion.questionId,
  );
  questionElement.innerHTML = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = answer.answer;
    answersElement.appendChild(button);
  });
};
generate(actualQuestion);

// mělo by projít všechny tři sekce
// JSONdata.forEach(generate());

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

const userAnswers = { topic.id [], internet: [], hoax: [] };
