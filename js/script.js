const firstBlock = document.querySelector('.first-block'),
  firstBtn = document.querySelector('.main__btn'),
  secondBlock = document.querySelector('.second-block'),
  secondBtn = document.querySelector('.second-btn'),
  landingBlock = document.querySelector('.landing-block'),
  CounterPlus = document.querySelectorAll('.counter-plus'),
  CounterMinus = document.querySelectorAll('.counter-minus'),
  CounterInput = document.querySelectorAll('.counter-number'),
  inputRadios = document.querySelectorAll('.second-block__input-block input'),
  landingBtn = document.querySelector('.landing-btn'),
  multipleBtn = document.querySelector('.multiple-btn'),
  magazineBtn = document.querySelector('.magazine-btn'),
  totalPrice = document.querySelector('.total-price');





function hideElement(elem) {
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


  const inputChecked = document.querySelector('input:checked');

  const inputValue = inputChecked.value;



  hideElement(secondBlock);
  showElement(document.querySelector('#' + inputValue));
});



CounterPlus.forEach(item => {
  item.addEventListener('click', () => {
    CounterInput.forEach(item => {
      item.value = Number(item.value) + 1;

      item.style.background = '#ff9900';
      setTimeout(() => {
        item.style.background = '#fff';
      }, 100);
    });
  })
});

CounterMinus.forEach(item => {
  item.addEventListener('click', () => {
    CounterInput.forEach(item => {
      if (item.value === '1') {
        return;
      } else {
        item.value = Number(item.value) - 1;
        item.style.background = '#ff9900';
        setTimeout(() => {
          item.style.background = '#fff';
        }, 100);
      }
    });
  });
});

landingBtn.addEventListener('click', () => {
  const landingInput = document.querySelector('.landing-number');
  const landingValue = landingInput.value;
  const totalValue = landingValue / 1000 * 730;
  totalPrice.classList.add('show-price');
  totalPrice.innerHTML = `Цена: <span class='total-price-span'>${totalValue}р</span> `;
});

multipleBtn.addEventListener('click', () => {
  const multipleNumber = document.querySelector('.multiple-block__number');
  const multipleInput = document.querySelector('.multiple-block__input');
  const multipleNumberValue = multipleNumber.value;
  const multipleNmultipleInputumberValue = multipleInput.value;
  const totalValue = (multipleNumberValue * ((multipleNmultipleInputumberValue - 500 ) / 1000 * 730 ));
  totalPrice.classList.add('show-price');
  totalPrice.innerHTML = `Цена: <span class='total-price-span'>${totalValue}р</span> `;
});

magazineBtn.addEventListener('click', () => {
  const magazineNumber = document.querySelector('.magazine-block__number');
  const magazineInput = document.querySelector('.magazine-block__input');
  const magazineNumberValue = magazineNumber.value;
  const magazineNmultipleInputumberValue = magazineInput.value;
  const totalValue = (magazineNumberValue * ((magazineNmultipleInputumberValue - 500 ) / 1000 * 730 ));
  totalPrice.classList.add('show-price');
  totalPrice.innerHTML = `Цена: <span class='total-price-span'>${totalValue}р</span> `;
});