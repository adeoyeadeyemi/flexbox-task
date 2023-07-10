const hamburger = document.querySelector('.lines');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('visible');
});
