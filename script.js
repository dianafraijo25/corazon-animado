document.querySelector('.heart').addEventListener('click', function () {
    this.style.backgroundColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
  });
  