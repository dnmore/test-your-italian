function buildTest() {
  const output = [];

  testWords.forEach((currentWord, wordIndex) => {
    const answers = [];
    for (letter in currentWord.answers) {
      answers.push(
        `<section>
                <label>
                <input type="radio" name="question${wordIndex}" value="${letter}">
                ${letter} :
                ${currentWord.answers[letter]}
              </label>
              </section>`
      );
    }
    output.push(
      `<div class="word"> ${currentWord.word} </div>
            <div class="answers"> ${answers.join("")} </div>`
    );
  });

  testContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = testContainer.querySelectorAll(".answers");

  let correctNum = 0;

  testWords.forEach((currentWord, wordIndex) => {
    const answerContainer = answerContainers[wordIndex];
    const selector = `input[name=question${wordIndex}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentWord.correctAnswer) {
      correctNum++;
      answerContainers[wordIndex].style.color = "green";
    } else {
      answerContainers[wordIndex].style.color = "red";
    }
  });
  resultsContainer.innerHTML = `${correctNum} out of ${testWords.length}`;
}

const testContainer = document.getElementById("test");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

var testWords = [
  {
    word: "casa",
    answers: {
      a: "cat",
      b: "home",
      c: "sky",
    },
    correctAnswer: "b",
  },
  {
    word: "nave",
    answers: {
      a: "ship",
      b: "sausage",
      c: "umbrella",
    },
    correctAnswer: "a",
  },
  {
    word: "scatola",
    answers: {
      a: "box",
      b: "mountain",
      c: "tree",
    },
    correctAnswer: "a",
  },
  {
    word: "ciliegia",
    answers: {
      a: "snake",
      b: "meat",
      c: "cherry",
    },
    correctAnswer: "c",
  },
  {
    word: "latte",
    answers: {
      a: "dog",
      b: "milk",
      c: "carpet",
    },
    correctAnswer: "b",
  },
];

buildTest();
submitButton.addEventListener("click", showResults);
resetButton.addEventListener("click", clearTest);
