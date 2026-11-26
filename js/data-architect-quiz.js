const form = document.querySelector("#quiz-form");
const questionList = document.querySelector("#question-list");
const summary = document.querySelector("#score-summary");
const errorMessage = document.querySelector("#quiz-error");
const submitButton = document.querySelector("#submit-quiz");
const retryButton = document.querySelector("#retry-quiz");
const backToPartsButton = document.querySelector("#back-to-parts");
const config = window.quizConfig ?? {
  name: "Data Architect",
  homeUrl: "data-architect-home.html",
  partCount: 6,
  parts: {
    1: window.dataArchitectQuestions,
    2: window.dataArchitectPart2Questions,
    3: window.dataArchitectPart3Questions
  }
};
const requestedPart = Number(new URLSearchParams(window.location.search).get("part") || "1");
const partNumber = Number.isInteger(requestedPart) && requestedPart >= 1 && requestedPart <= config.partCount
  ? requestedPart
  : 0;
const questions = config.parts[partNumber] ?? [];
const partHeading = document.querySelector("#part-number");
const sampleNote = document.querySelector("#sample-note");
const comingSoon = document.querySelector("#coming-soon");

document.title = `${config.name} - Part ${partNumber}`;

if (questions.length > 0) {
  partHeading.textContent = String(partNumber);
  sampleNote.textContent = `This part contains ${questions.length} practice question${questions.length === 1 ? "" : "s"}.`;
  renderQuestions();
  form.addEventListener("submit", submitQuiz);
  retryButton.addEventListener("click", resetQuiz);
  backToPartsButton.addEventListener("click", () => {
    window.location.href = config.homeUrl;
  });
} else if (partNumber > 0) {
  partHeading.textContent = String(partNumber);
  document.querySelector("#quiz-intro")?.remove();
  sampleNote.hidden = true;
  form.hidden = true;
  comingSoon.textContent = `Questions for Part ${partNumber} will be added here.`;
  comingSoon.hidden = false;
} else {
  document.title = `${config.name} - Part not found`;
  partHeading.textContent = "Not found";
  sampleNote.hidden = true;
  form.hidden = true;
  comingSoon.textContent = `Choose a part from the ${config.name} parts page.`;
  comingSoon.hidden = false;
}

function renderQuestions() {
  for (const [index, question] of questions.entries()) {
    const card = document.createElement("li");
    card.className = "question-card";
    card.dataset.questionId = String(index);

    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const number = document.createElement("span");
    number.className = "question-number";
    number.textContent = `Question ${index + 1}`;
    legend.append(number, document.createTextNode(question.prompt));
    fieldset.append(legend);

    const instruction = document.createElement("p");
    instruction.className = "question-instruction";
    instruction.textContent = `Select ${question.answers.length} answer${question.answers.length === 1 ? "" : "s"}.`;
    fieldset.append(instruction);

    const options = document.createElement("div");
    options.className = "answer-options";

    for (const option of question.options) {
      const label = document.createElement("label");
      label.className = "answer-option";

      const input = document.createElement("input");
      input.type = question.answers.length === 1 ? "radio" : "checkbox";
      input.name = `question-${index}`;
      input.value = option.id;

      const letter = document.createElement("strong");
      letter.textContent = `${option.id}.`;
      const text = document.createElement("span");
      text.textContent = option.text;

      label.append(input, letter, text);
      options.append(label);
    }

    fieldset.append(options);
    const feedback = document.createElement("div");
    feedback.className = "question-feedback";
    feedback.hidden = true;
    feedback.setAttribute("aria-live", "polite");
    card.append(fieldset, feedback);
    questionList.append(card);
  }
}

function showFeedback(card, question, selectedAnswers) {
  const correctAnswers = new Set(question.answers);
  const isCorrect = selectedAnswers.length === correctAnswers.size
    && selectedAnswers.every((answer) => correctAnswers.has(answer));
  const feedback = card.querySelector(".question-feedback");

  card.classList.add(isCorrect ? "is-correct" : "is-incorrect");
  feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");

  for (const label of card.querySelectorAll(".answer-option")) {
    const input = label.querySelector("input");
    input.disabled = true;
    if (correctAnswers.has(input.value)) {
      label.classList.add("is-answer");
    } else if (input.checked) {
      label.classList.add("is-selected-wrong");
    }
  }

  const describeAnswers = (answerIds) => answerIds
    .map((answerId) => {
      const option = question.options.find((item) => item.id === answerId);
      return `${option.id}. ${option.text}`;
    })
    .join("; ");

  const heading = document.createElement("strong");
  heading.textContent = isCorrect
    ? "Correct"
    : `Incorrect. Your answer${selectedAnswers.length === 1 ? "" : "s"}: ${describeAnswers(selectedAnswers)}. Correct answer${question.answers.length === 1 ? "" : "s"}: ${describeAnswers(question.answers)}.`;
  const explanation = document.createElement("p");
  explanation.textContent = question.explanation;
  feedback.append(heading, explanation);
  feedback.hidden = false;

  return isCorrect;
}

function submitQuiz(event) {
  event.preventDefault();
  errorMessage.hidden = true;

  const answers = new FormData(form);
  const incompleteIndex = questions.findIndex((question, index) => {
    return answers.getAll(`question-${index}`).length !== question.answers.length;
  });
  if (incompleteIndex !== -1) {
    errorMessage.hidden = false;
    questionList.children[incompleteIndex].querySelector("input").focus();
    return;
  }

  let score = 0;
  const missedQuestions = [];

  questions.forEach((question, index) => {
    const card = questionList.children[index];
    const selectedAnswers = answers.getAll(`question-${index}`);
    const isCorrect = showFeedback(card, question, selectedAnswers);
    if (isCorrect) {
      score += 1;
    } else {
      missedQuestions.push(index + 1);
    }
  });

  const percentage = Math.round((score / questions.length) * 100);
  summary.textContent = missedQuestions.length === 0
    ? `Score: ${score} / ${questions.length} (${percentage}%). All answers are correct.`
    : `Score: ${score} / ${questions.length} (${percentage}%). Incorrect questions: ${missedQuestions.join(", ")}.`;
  summary.hidden = false;
  submitButton.hidden = true;
  retryButton.hidden = false;
  backToPartsButton.hidden = false;
  summary.focus();
}

function resetQuiz() {
  form.reset();
  summary.hidden = true;
  errorMessage.hidden = true;
  submitButton.hidden = false;
  retryButton.hidden = true;
  backToPartsButton.hidden = true;

  for (const card of questionList.children) {
    card.classList.remove("is-correct", "is-incorrect");
    const feedback = card.querySelector(".question-feedback");
    feedback.className = "question-feedback";
    feedback.replaceChildren();
    feedback.hidden = true;
    for (const label of card.querySelectorAll(".answer-option")) {
      label.classList.remove("is-answer", "is-selected-wrong");
      label.querySelector("input").disabled = false;
    }
  }

  questionList.querySelector("input").focus();
}
