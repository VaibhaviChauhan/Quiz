const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');


let currentQuestion = 0;
var score = 0;

let questions = [{
    question: "How many sisters did Joey have?",
    answers: [{
      option: "9",
      answer: false
    }, {
      option: "7",
      answer: true
    }]

  },
  {
    question: "What was Phoebe's fake name?",
    answers: [{
      option: "Regina Phalange",
      answer: true
    }, {
      option: "Georgiana West",
      answer: false
    }]

  },
  {
    question: "Who hates Thanksgiving?",
    answers: [{
      option: "Ross",
      answer: false
    }, {
      option: "Chandler",
      answer: true
    }]

  }
]

restartBtn.addEventListener('click', restart);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
submitBtn.addEventListener('click', submit);

function beginQuiz() {
  currentQuestion = 0;
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onClick = () => {
    let ano = 0;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 3) {
      score++;
    }
  }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onClick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
  prevBtn.classList.add("hide");
}
beginQuiz();

function restart() {
  currentQuestion = 0;
  prevBtn.classList.remove('hide');
  nextBtn.classList.remove('hide');
  submitBtn.classList.remove('hide');
  trueBtn.classList.remove('hide');
  falseBtn.classList.remove('hide');
  score = 0;
  userScore.innerHTML = score;
  beginQuiz();
}

function next() {
  currentQuestion++;
  if (currentQuestion >= 2) {
    nextBtn.classList.add('hide');
    prevBtn.classList.remove('hide');
  }
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
  prevBtn.classList.remove('hide');
}

function prev() {
  currentQuestion--;
  if (currentQuestion <= 0) {
    nextBtn.classList.add('hide');
    prevBtn.classList.remove('hide');
  }
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
  prevBtn.classList.remove('hide');
}


function submit() {
  prevBtn.classList.add('hide');
  nextBtn.classList.add('hide');
  submitBtn.classList.add('hide');
  trueBtn.classList.add('hide');
  falseBtn.classList.add('hide');
  questionText.innerHTML = "Congratulations on submitting the quiz!";
}
