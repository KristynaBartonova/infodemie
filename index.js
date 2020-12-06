'use strict';

console.log('funguju');

const quizData = [
  {
    id: 0,
    topic: 'FakeNews',
    questions: [
      {
        id: 0,
        question: 'Co je to Fake News?',
        answers: [
          {
            id: 0,
            answer:
              'Podvodná zpráva obsahující dezinformace. Často ji lze snadno zaměnit s důvěryhodnou zprávou ověřených médií.',
          },
          {
            id: 1,
            answer:
              'Podvodná zpráva, která je vpuštěna do světa, aby satiricky pobavila.',
          },
          {
            id: 2,
            answer:
              'Podvodná zpráva, která je používána v médiích především na silvestr a má za úkol sledující a čtenáře pobavit.',
          },
          {
            id: 3,
            answer: 'Podvodná zpráva, která má odlehčit téma.',
          },
        ],
        correctAnswer: 0,
      },
      {
        id: 1,
        question:
          'Titulek: Vakcínu už koupíte v temném koutě internetu, „zahrabanou“ mezi drogami. Policie je ve střehu ',
        answers: [
          {
            id: 0,
            answer: 'Bude s největší pravděpodobností Fake News.',
          },
          {
            id: 1,
            answer: 'Bude se jednat o seriózní článek.',
          },
          {
            id: 2,
            answer:
              'Nejspíš půjde o bulvární článek, ale nejedná se o Fake News.',
          },
        ],
        correctAnswer: 2,
      },
      {
        id: 2,
        question:
          'Titulek: Petr Kellner investuje 1,5 milionu eur do startupu a říká, že zde se nachází budoucnost, začněte také investovat s bitcoiny.',
        answers: [
          {
            id: 0,
            answer: 'Bude s největší pravděpodobností Fake News.',
          },
          {
            id: 1,
            answer: 'Bude se jednat o seriózní článek.',
          },
          {
            id: 2,
            answer:
              'Nejspíš půjde o bulvární článek, ale nejedná se o Fake News.',
          },
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: 'Kde na Fake News narazíte?',
        answers: [
          {
            id: 0,
            answer: 'Pouze ve spamových e-mailech.',
          },
          {
            id: 1,
            answer: 'Může se objevit úplně všude dokonce i v televizi.',
          },
          {
            id: 2,
            answer: 'Na sociálních sítích nebo v e-mailu.',
          },
          {
            id: 3,
            answer: 'Pouze na nedůvěryhodných webech.',
          },
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: 'Můžeme se s Fake News setkat i v Česku?',
        answers: [
          {
            id: 0,
            answer: 'Ano, je to běžný jev.',
          },
          {
            id: 1,
            answer: 'Ne, jedná se o fenomén se kterým má problém jenom USA.',
          },
          {
            id: 2,
            answer: 'Pouze ojediněle.',
          },
          {
            id: 3,
            answer:
              'Sociální sítě v Česku Fake News blokují, takže se setkáváme pouze s ověřenými informacemi.',
          },
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: 1,
    topic: 'Hoax',
    questions: [
      {
        id: 0,
        question: 'Když vám přijde řetězový srandovní e-mail, co uděláte?',
        answers: [
          {
            id: 0,
            answer: 'Pošlu ho dál, aby se pobavili i moji přátelé.',
          },
          {
            id: 1,
            answer:
              'Zkontroluju si, zda jsou všechny e-maily ve skryté kopii. Pokud se mi na něm zdá cokoliv divného nikomu to dále neposílám.',
          },
        ],
        correctAnswer: 0,
      },
      {
        id: 1,
        question: 'Co je to hoax?',
        answers: [
          {
            id: 0,
            answer:
              'Jedná se o pravdivou zprávu, kterou mainstreamová média odmítají publikovat.',
          },
          {
            id: 1,
            answer:
              'Jedná se o zprávu, která je založena na vědeckých poznatcích.',
          },
          {
            id: 2,
            answer:
              'Jedná se o nepravdivou zprávu, která se tváří, jako by byla pravdivá.',
          },
          {
            id: 3,
            answer: 'Jedná se o cenzurovanou zprávu na sociálních sítích.',
          },
        ],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: 'V čem spočívá problém hoaxů?',
        answers: [
          {
            id: 0,
            answer: 'Vaše okolí si bude myslet, že jste nemocní na hlavu.',
          },
          {
            id: 1,
            answer: 'Běžní obyvatelé se nedozví pravdu.',
          },
          {
            id: 2,
            answer:
              'Může se k vašemu e-mailu dostat i jiná osoba ale také může dojít k manipulaci obyvatelstva a šíření paniky.',
          },
          {
            id: 3,
            answer:
              'Problém spočívá v tom, že hoaxy přebírají hlavní slovo ve zprávách a k publiku se nedostanou ty nejdůležitější informace.',
          },
        ],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: 'Máte podezření, že by se mohlo jednat o Hoax. Co uděláte?',
        answers: [
          {
            id: 0,
            answer: 'Zeptáte se přátel na Facebooku.',
          },
          {
            id: 1,
            answer:
              'Pokud je tam uveden autor článku, nejedná se o hoax. Můžu tedy zprávu s klidem poslat přátelům.',
          },
          {
            id: 2,
            answer:
              'Hoaxy se v ČR nevyskytují, proto není nutné ověřovat, zda článek obsahuje hoax.',
          },
          {
            id: 3,
            answer:
              'Podíváte se zdroje, na které odkazuje článek. Pokud je obsahuje, tak zda jsou relevantní.',
          },
        ],
        correctAnswer: 3,
      },
      {
        id: 4,
        question: 'Jak poznáte důvěryhodnou zprávu na sociálních sítích?',
        answers: [
          {
            id: 0,
            answer: 'Má hodně sdílení.',
          },
          {
            id: 1,
            answer: 'Sdílel jí někdo, komu věřím.',
          },
          {
            id: 2,
            answer: 'Na první pohled to může být těžké, musím si ověřit fakta.',
          },
          {
            id: 3,
            answer:
              'Sociální sítě blokují Fake News, s takovou zprávou se nesetkám.',
          },
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 2,
    topic: 'Internet',
    questions: [
      {
        id: 0,
        question: 'Jak poznáte zabezpečenou webovou stránku?',
        answers: [
          {
            id: 0,
            answer:
              'URL adresa začíná HTTPS a na okraji adresní řádky je znak zámku.',
          },
          {
            id: 1,
            answer: 'URL adresa začíná HTTP.',
          },
          {
            id: 2,
            answer: 'Najdu si ji v seznamu zabezpečených webových stránek.',
          },
        ],
        correctAnswer: 0,
      },
      {
        id: 1,
        question: 'Které z následujících tvrzení je pravdivé?',
        answers: [
          {
            id: 0,
            answer: 'Reklama musí souviset s tématem článku. ',
          },
          {
            id: 1,
            answer: 'Reklama v článku musí být vždy jasně a čitelně označená.',
          },
        ],
        correctAnswer: 2,
      },
      {
        id: 2,
        question:
          'Při registraci do jakéhokoliv účtu je třeba vybrat správné a silné heslo. Jak jej sestavit, aby bylo opravdu silné?',
        answers: [
          {
            id: 0,
            answer: 'Zadat své rodné číslo.',
          },
          {
            id: 1,
            answer: 'Heslo by mělo být lehce zapamatovatelné.',
          },
          {
            id: 2,
            answer: 'Přidat do hesla jméno rodinného příslušníka.',
          },
          {
            id: 3,
            answer:
              'Používat kombinaci čísel, malých a velkých písmen a znaků.',
          },
        ],
        correctAnswer: 3,
      },
      {
        id: 3,
        question: 'Zobrazení stránky v anonymním režimu:',
        answers: [
          {
            id: 0,
            answer:
              'Zabrání tomu, aby někdo sledoval, jaké stránky navštěvuji.',
          },
          {
            id: 1,
            answer: 'Veškerá aktivita na stránkách není nijak dohledatelná.',
          },
          {
            id: 2,
            answer: 'Zabrání ukládání aktivity do místní paměti.',
          },
          {
            id: 3,
            answer: 'Zabrání zobrazení aktualní lokality.',
          },
        ],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: 'Značka „Heureka ověřeno zákazníky“ je udělena e-shopům',
        answers: [
          {
            id: 0,
            answer:
              'E-shopu, která má na svých stránkách zmínku o starořeckém učenci Archimédésovi.',
          },
          {
            id: 1,
            answer: 'Pouze e-shopu, který si u Heureky zaplatí reklamu.',
          },
          {
            id: 2,
            answer: 'Každému e-shopu, který má nové zboží na českém trhu.',
          },
          {
            id: 3,
            answer:
              'Které již mají nějaké zpětné vazby od zákazníků, lze dohledat jejich hodnocení a jedná se o prověřený e-shop.',
          },
        ],
        correctAnswer: 3,
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
// const questionsSetString = JSON.stringify(quizData);
// const questionsSet = JSON.parse(questionsSetString);

// určuje téma
const numberOfTopics = quizData.length - 1;

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
let userAnswers = quizData.map((topic) => ({
  topicId: topic.id,
  correctAnswers: 0,
}));

// tohle nakonci vypisuje projité odpovědi a řekne uživateli správné výsledky.
const printResults = () => {
  const box = document.getElementById('question-container');
  box.innerHTML = '';
  // prochází uživatelské odpovědi, které se zapisují
  userAnswers.forEach((userAnswer) => {
    // prochází téma v JSONU - téma by se mělo rovnat uživatelské odpovědi tématu
    const topic = quizData.find((topic) => topic.id === userAnswer.topicId);
    questionElement.textContent = 'Zvládli jste to';
    // vytvářím si buttonový odkaz, který bude vést na všechny tři témata
    const anchor = document.createElement('a');
    anchor.innerHTML = `Chci vědět víc`;
    anchor.classList.add('final-btn');
    anchor.href = `content.html#${topic.topic}`;
    // vytvářím si odstavec, který se vypíše na konečné stránce
    const score = document.createElement('p');
    score.classList.add('score');
    score.innerHTML = ` V tématu ${topic.topic} jste získali následující počet bodů: ${userAnswer.correctAnswers}`;
    // přidá se jak odstavec, tak i buttonový odstavec
    box.append(score, anchor);
  });
};

// tahle funkce mění otázky
const changeQuestion = () => {
  // vybere téma pomocí funkce find a porovná to s témate aktuálně zvolené otázky
  const topic = quizData.find((topic) => topic.id === actualQuestion.topicId);
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
  const topic = quizData.find((topic) => topic.id === actualQuestion.topicId);
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
