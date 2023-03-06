let questions = [  {    question: "What is the capital of France?",    answer: "Paris"  },  {    question: "What is the largest ocean in the world?",    answer: "Pacific"  },  {    question: "What is the currency of Japan?",    answer: "Yen"  },  {    question: "What is the tallest mountain in the world?",    answer: "Mount Everest"  },  {    question: "What is the chemical symbol for gold?",    answer: "Au"  }];

let askedQuestions = [];
let missedQuestions = 0;

function setup() {
  createCanvas(400, 400);

  askQuestion();
}

function askQuestion() {
  clear();

  let randomIndex = floor(random(questions.length));
  let currentQuestion = questions[randomIndex];

  text(currentQuestion.question, 50, 50);
  let answerInput = createInput();
  let submitButton = createButton("Submit");
  submitButton.mousePressed(function() {
    let userAnswer = answerInput.value();
    if (userAnswer.toLowerCase() == currentQuestion.answer.toLowerCase()) {
      askedQuestions.push(currentQuestion);
      questions.splice(randomIndex, 1);
      if (questions.length > 0) {
        askQuestion();
      } else {
        displayResult(true);
      }
    } else {
      missedQuestions++;
      if (missedQuestions >= 5) {
        displayResult(false);
      } else {
        alert("Incorrect. Please try again.");
        askQuestion();
      }
    }
  });
}

function displayResult(hasWon) {
  clear();

  if (hasWon) {
    text("Congratulations! You answered all the questions correctly.", 50, 50);
  } else {
    text("Sorry, you missed too many questions. Please try again.", 50, 50);
  }

  let restartButton = createButton("Restart Quiz");
  restartButton.mousePressed(function() {
    questions = shuffle(askedQuestions.concat(questions));
    askedQuestions = [];
    missedQuestions = 0;
    askQuestion();
  });
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
