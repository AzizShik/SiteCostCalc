const firstBlock = document.querySelector('.first-block'),
      firstBtn = document.querySelector('.main__btn'),
      secondBlock = document.querySelector('.second-block'),
      secondBtn = document.querySelector('.second-btn'),
      thirdBlock = document.querySelector('.third-block');


function hideElement(elem){
  elem.classList.remove('show');
  elem.classList.add('hide');
}

function showElement(elem) {
  elem.classList.remove('hide');
  elem.classList.add('show');
}
firstBtn.addEventListener('click', () => {
  hideElement(firstBlock);
  showElement(secondBlock);
});
secondBtn.addEventListener('click', () => {
  hideElement(secondBlock);
  showElement(thirdBlock);
});
