/** @format */

const btn = document.getElementById('btn');
const cardFrontEl = document.getElementById('card-front-el');
const cardBackEl = document.getElementById('card-back-el');
const scoreButton = document.getElementsByClassName('score-btn');
const ratingEl = document.getElementById('rating');
let rating = '';
let lastRated = 0;
btn.addEventListener('click', toggleHideClass);

for (i in scoreButton) {
  scoreButton[i].addEventListener('click', function () {
    if (lastRated) {
      scoreButton[lastRated - 1].classList.remove('selected');
    }
    console.log(this);
    console.log(this.textContent);
    lastRated = Number(this.textContent);
    this.classList.add('selected');
  });
}

function toggleHideClass() {
  cardFrontEl.classList.toggle('hide');
  console.log(cardFrontEl.classList);
  cardBackEl.classList.toggle('hide');
  ratingEl.textContent = lastRated;
}
