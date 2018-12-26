import '../scss/style.scss';

const goldPopup = document.querySelector('.gold');
const royalPopup = document.querySelector('.royal');
const silverPopup = document.querySelector('.silver');

document
  .querySelectorAll('.gold__close, .royal__close, .silver__close')
  .forEach(element => {
    element.addEventListener('click', () => {
      goldPopup.style.display = 'none';
      royalPopup.style.display = 'none';
      silverPopup.style.display = 'none';
    });
  });

window.addEventListener('click', e => {
  if (
    e.target === goldPopup ||
    e.target === royalPopup ||
    e.target === silverPopup
  ) {
    goldPopup.style.display = 'none';
    royalPopup.style.display = 'none';
    silverPopup.style.display = 'none';
  }
});

// popups

const signUpGold = document.querySelector('.signUp__gold');
const signUpRoyal = document.querySelector('.signUp__royal');
const signUpSilver = document.querySelector('.signUp__silver');

signUpGold.addEventListener('click', () => {
  goldPopup.style.display = 'block';
  goldPopup.style.opacity = '1';
});

signUpRoyal.addEventListener('click', () => {
  royalPopup.style.display = 'block';
  royalPopup.style.opacity = '1';
});

signUpSilver.addEventListener('click', () => {
  silverPopup.style.display = 'block';
  silverPopup.style.opacity = '1';
});

// navigation close

document.querySelectorAll('.navigation__link').forEach(element => {
  element.addEventListener('click', () => {
    document.getElementById('navigation__toggle').checked = false;
  });
});
