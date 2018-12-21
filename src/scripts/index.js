import '../scss/style.scss';

console.log('This is from index.js file.');

const popup = document.querySelector('.popup');

document.querySelector('.popup__close').addEventListener('click', () => {
  popup.style.visibility = 'hidden';
});

window.addEventListener('click', e => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
