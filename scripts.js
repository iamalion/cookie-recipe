window.onload = function () {
  const lightMode = document.getElementById('lightBtn');
  const darkMode = document.getElementById('darkBtn');
  const body = document.body;

  lightMode.addEventListener('click', function () {
    body.style.backgroundColor = 'hotpink';
    body.style.color = 'blue';
  });

  darkMode.addEventListener('click', function () {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  });
};
