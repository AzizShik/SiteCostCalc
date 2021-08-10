const firstBlock = document.querySelector('.first-block'),
      firstBtn = document.querySelector('.main__btn'),
      secondBlock = document.querySelector('.second-block'),
      secondBtn = document.querySelector('.second-btn'),
      landingBlock = document.querySelector('.landing-block'),
      CounterPlus = document.getElementById('counter-plus'),
      CounterMinus = document.getElementById('counter-minus'),
      CounterInput = document.getElementById('counter-number')
      ;


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
  showElement(landingBlock);
});



CounterPlus.addEventListener('click', () => {
  CounterInput.value = Number(CounterInput.value) + 1;

  CounterInput.style.background = '#ff9900';
  setTimeout(() =>{
    CounterInput.style.background = '#fff';
  }, 100);
});

CounterMinus.addEventListener('click', () => {
  if(CounterInput.value === '1') {
    return;
  } else {
    CounterInput.value = Number(CounterInput.value) - 1;
    CounterInput.style.background = '#ff9900';
    setTimeout(() =>{
      CounterInput.style.background = '#fff';
    }, 100);
  }
});

