let currentQuestion = 0;
let score = 0;
let selectedLanguage = "en";
let shuffledQuestions = [];

function startQuiz(language) {
  selectedLanguage = language;

  shuffledQuestions = [...questions];

  // Randomize questions
  shuffledQuestions.sort(() => Math.random() - 0.5);

  currentQuestion = 0;
  score = 0;

  showQuestion();
}

function showQuestion() {
  const question = shuffledQuestions[currentQuestion];

  const questionText =
    selectedLanguage === "ar"
      ? question.ar
      : question.en;

  document.getElementById("question").innerText = questionText;

  const answersContainer =
    document.getElementById("answers");

  answersContainer.innerHTML = "";

  // Create a copy so answers can be randomized
  const answers = question.answers.map((answer, index) => ({
    text: answer,
    originalIndex: index
  }));

  // Randomize answers
  answers.sort(() => Math.random() - 0.5);

  answers.forEach(answer => {
    const button = document.createElement("button");

    button.innerText = answer.text;

    button.onclick = () => {
      checkAnswer(
        answer.originalIndex,
        question.correct
      );
    };

    answersContainer.appendChild(button);
  });

  document.getElementById("progress").innerText =
    `${currentQuestion + 1} / 50`;
}

function checkAnswer(selected, correct) {

  if (selected === correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < shuffledQuestions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {

  const percentage =
    Math.round((score / 50) * 100);

  document.getElementById("quiz").style.display =
    "none";

  document.getElementById("result").style.display =
    "block";

  document.getElementById("finalScore").innerText =
    `${score} / 50`;

  document.getElementById("percentage").innerText =
    `${percentage}%`;

  document.getElementById("message").innerText =
    selectedLanguage === "ar"
      ? "أحسنت! استمر في قراءة كلمة الله ❤️"
      : "Great job! Keep growing in God's Word! ❤️";
