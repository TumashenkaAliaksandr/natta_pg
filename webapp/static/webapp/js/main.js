document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});
document.querySelector('.close-button').addEventListener('click', () => {
  document.getElementById('top-bar').style.display = 'none';
});
