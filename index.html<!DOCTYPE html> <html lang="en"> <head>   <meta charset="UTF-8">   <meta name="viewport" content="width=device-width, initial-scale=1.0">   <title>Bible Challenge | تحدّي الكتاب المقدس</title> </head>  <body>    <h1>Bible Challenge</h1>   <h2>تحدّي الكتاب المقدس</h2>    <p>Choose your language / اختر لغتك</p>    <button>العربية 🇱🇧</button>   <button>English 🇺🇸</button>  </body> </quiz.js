let currentQuestion = 0;
let score = 0;
let selectedLanguage = "en";
let shuffledQuestions = [];
let playerName = "";
let playerGroup = "";

let seconds = 0;
let timerInterval;


// ==============================
// START QUIZ
// ==============================

function startQuiz(language) {

  playerName = document.getElementById("playerName").value.trim();
  playerGroup = document.getElementById("playerGroup").value.trim();

  if (!playerName) {
    alert(
      language === "ar"
        ? "يرجى كتابة اسم الطفل"
        : "Please enter the child's name"
    );

    return;
  }

  selectedLanguage = language;

  currentQuestion = 0;
  score = 0;
  seconds = 0;

  // Randomize questions
  shuffledQuestions = [...questions];

  shuffleArray(shuffledQuestions);

  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");

  startTimer();

  showQuestion();
}


// ==============================
// RANDOM FUNCTION
// ==============================

function shuffleArray(array) {

  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] =
      [array[j], array[i]];
  }
}


// ==============================
// SHOW QUESTION
// ==============================

function showQuestion() {

  const question =
    shuffledQuestions[currentQuestion];

  const questionText =
    selectedLanguage === "ar"
      ? question.ar
      : question.en;

  document.getElementById("question").innerText =
    questionText;

  document.getElementById("questionNumber").innerText =
    selectedLanguage === "ar"
      ? `السؤال ${currentQuestion + 1} من 50`
      : `Question ${currentQuestion + 1} of 50`;

  document.getElementById("progress").innerText =
    `${currentQuestion + 1} / 50`;

  document.getElementById("score").innerText =
    selectedLanguage === "ar"
      ? `النقاط: ${score}`
      : `Score: ${score}`;

  // Copy answers
  const answers =
    question.answers.map((answer, index) => ({
      text: answer,
      originalIndex: index
    }));

  // Randomize answers
  shuffleArray(answers);

  const answersContainer =
    document.getElementById("answers");

  answersContainer.innerHTML = "";

  answers.forEach((answer, index) => {

    const button =
      document.createElement("button");

    button.className = "answer";

    button.innerHTML =
      `<b>${String.fromCharCode(65 + index)}.</b>
       ${answer.text}`;

    button.onclick = () => {

      checkAnswer(
        answer.originalIndex,
        question.correct,
        button
      );

    };

    answersContainer.appendChild(button);

  });

  document
    .getElementById("nextButton")
    .classList.add("hidden");
}


// ==============================
// CHECK ANSWER
// ==============================

function checkAnswer(
  selected,
  correct,
  selectedButton
) {

  const buttons =
    document.querySelectorAll(".answer");

  // Disable all answers
  buttons.forEach(button => {
    button.disabled = true;
  });

  // Correct answer
  buttons.forEach(button => {

    const text =
      button.innerText;

    // We don't rely on position.
    // The selected button is handled below.
  });


  if (selected === correct) {

    score++;

    selectedButton.style.background =
      "#dcfce7";

    selectedButton.style.borderColor =
      "#22c55e";

  } else {

    selectedButton.style.background =
      "#fee2e2";

    selectedButton.style.borderColor =
      "#ef4444";

    // Highlight correct answer
    buttons.forEach(button => {

      const answerText =
        button.innerText.substring(3).trim();

      const correctText =
        shuffledQuestions[currentQuestion]
          .answers[correct];

      if (answerText === correctText) {

        button.style.background =
          "#dcfce7";

        button.style.borderColor =
          "#22c55e";
      }

    });
  }

  document.getElementById("score").innerText =
    selectedLanguage === "ar"
      ? `النقاط: ${score}`
      : `Score: ${score}`;

  document
    .getElementById("nextButton")
    .classList.remove("hidden");
}


// ==============================
// NEXT QUESTION
// ==============================

function nextQuestion() {

  currentQuestion++;

  if (
    currentQuestion <
    shuffledQuestions.length
  ) {

    showQuestion();

  } else {

    finishQuiz();
  }
}


// ==============================
// TIMER
// ==============================

function startTimer() {

  clearInterval(timerInterval);

  timerInterval =
    setInterval(() => {

      seconds++;

      const minutes =
        Math.floor(seconds / 60);

      const remainingSeconds =
        seconds % 60;

      const timeText =
        `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

      document.getElementById("timer").innerText =
        timeText;

    }, 1000);
}


// ==============================
// FINISH QUIZ
// ==============================

function finishQuiz() {

  clearInterval(timerInterval);

  const percentage =
    Math.round((score / 50) * 100);

  document
    .getElementById("quizScreen")
    .classList.add("hidden");

  document
    .getElementById("resultScreen")
    .classList.remove("hidden");

  document.getElementById("finalScore").innerText =
    `${score} / 50`;

  document.getElementById("percentage").innerText =
    `${percentage}%`;

  document.getElementById("resultTitle").innerText =
    selectedLanguage === "ar"
      ? "أحسنت! 🎉"
      : "Great Job! 🎉";

  document.getElementById("message").innerText =
    selectedLanguage === "ar"
      ? "استمر في قراءة كلمة الله والنمو فيها! ❤️"
      : "Keep growing in God's Word! ❤️";

}
