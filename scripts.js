window.onload = function () {
  const lightMode = document.getElementById('lightBtn');
  const darkMode = document.getElementById('darkBtn');
  const defaultFont = document.getElementById('defaultFont');
  const largeFont = document.getElementById('largeFont');
  const body = document.body;

  lightMode.addEventListener('click', function () {
    body.style.backgroundColor = 'hotpink';
    body.style.color = 'blue';
  });

  darkMode.addEventListener('click', function () {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  });

  defaultFont.addEventListener('click', function () {
    body.style.fontSize = '20px';
  });

  largeFont.addEventListener('click', function () {
    body.style.fontSize = '35px';
  });
};
