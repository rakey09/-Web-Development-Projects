const questions = [
  {
      question: "What is the capital of France?",
      answers: [
          { text: "Paris", correct: true },
          { text: "London", correct: false },
          { text: "Berlin", correct: false },
          { text: "Madrid", correct: false }
      ]
  },
  {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: [
          { text: "Harper Lee", correct: true },
          { text: "J.K. Rowling", correct: false },
          { text: "Ernest Hemingway", correct: false },
          { text: "Mark Twain", correct: false }
      ]
  },
  {
      question: "What is the largest planet in our solar system?",
      answers: [
          { text: "Jupiter", correct: true },
          { text: "Saturn", correct: false },
          { text: "Earth", correct: false },
          { text: "Mars", correct: false }
      ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');

startQuiz();

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionContainer.style.display = 'block';
  scoreContainer.style.display = 'none';
  nextButton.style.display = 'none';
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  resetState();
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
          button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      const li = document.createElement('li');
      li.appendChild(button);
      answerButtonsElement.appendChild(li);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
      score++;
  }
  Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button.firstChild, button.firstChild.dataset.correct);
  });
  if (questions.length > currentQuestionIndex + 1) {
      nextButton.style.display = 'block';
  } else {
      endQuiz();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
      element.classList.add('correct');
  } else {
      element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion(questions[currentQuestionIndex]);
}

function endQuiz() {
  questionContainer.style.display = 'none';
  scoreContainer.style.display = 'block';
  scoreElement.innerText = score;
}

function restartQuiz() {
  startQuiz();
}
