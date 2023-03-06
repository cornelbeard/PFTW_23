// quiz questions and answers
const quizQuestions = [
    {
      question: "What is the capital of France?",
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter"
    },
    {
      question: "What is the smallest country in the world?",
      answer: "Vatican City"
    },
    {
      question: "What is the tallest mountain in the world?",
      answer: "Mount Everest"
    }
  ];
  
  // random question
  const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
  
  // prompt 
  const userResponse = prompt(randomQuestion.question);
  
  // user's response and correct answer alert
  alert("You answered " + userResponse + ". The correct answer was " + randomQuestion.answer + ".");
  