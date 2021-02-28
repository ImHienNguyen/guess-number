'use strict';

// console.log((document.querySelector('.message').textContent = 'Correct!'));

// Create secret number and intial score
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.guess').value = '';
// console.log(secretNumber);
// Check event
document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);

  console.log(inputNumber);
  // If input not a number
  if (!inputNumber) {
    document.querySelector('.message').textContent =
      'Please input a number! 😢';
  }
  // Check score >0 ?
  if (score > 0) {
    if (inputNumber === secretNumber) {
      // Equal
      document.querySelector('.message').textContent = '🎉 Correct!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#34a853';
      document.querySelector('.highscore').textContent = score;
      document.querySelector('.number').style.width = '30rem';
      highscore = Number(document.querySelector('.highscore').value);
    } else if (inputNumber > secretNumber) {
      // Input higher than secret number
      document.querySelector('.message').textContent = '📉 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // Input higher than secret number
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    // Out of score
    document.querySelector('.message').textContent = '☹ Try another one';
  }
});

// Again event
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
