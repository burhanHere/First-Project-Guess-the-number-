"use strict";

let randNumber = (Math.random() * 20 + 1).toFixed(0);
//for testing
// console.log(randNumber);

document.querySelector(`.check`).addEventListener("click", checkUserInput);

document.querySelector(`.again`).addEventListener("click", resetAll);

function resetAll() {
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`.number`).textContent = "?";
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.lives`).textContent = 3;
  document.querySelector(`body`).style.backgroundColor = `#222`;
}

function checkUserInput() {
  const userInput = document.querySelector(`.guess`).value;
  document.querySelector(`.guess`).value = null;
  if (userInput == "") {
    alert(`Please enter a Number...`);
  } else if (randNumber == userInput) {
    document.querySelector(
      `.message`
    ).textContent = `Congratulations🔥🔥🔥\nYou Guessed Correct number`;
    document.querySelector(`.score`).textContent =
      Number(document.querySelector(`.score`).textContent) + 10;
    document.querySelector(`.number`).textContent = randNumber;
    randNumber = (Math.random() * 20 + 1).toFixed(0);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    //for testing
    //console.log(randNumber);
  } else {
    document.querySelector(`body`).style.backgroundColor = `#222`;
    if (userInput > randNumber) {
      document.querySelector(`.message`).textContent = `Oops!!!\nToo high😂`;
    } else {
      document.querySelector(`.message`).textContent = `Oops!!!\nToo low😂`;
    }
    let score = Number(document.querySelector(`.score`).textContent);
    document.querySelector(`.highscore`).textContent = score;
    if (score > 0) {
      score -= 10;
    }
    document.querySelector(`.lives`).textContent =
      Number(document.querySelector(`.lives`).textContent) - 1;
    if (Number(document.querySelector(`.lives`).textContent) == 0) {
      alert(`Game over!!!\nBetter luck next time😉...`);
      resetAll();
    }
    document.querySelector(`.score`).textContent = score === NaN ? 0 : score;
  }
}
