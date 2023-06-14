// Отримуємо необхідні елементи з HTML
const buttonsQuestions = document.querySelectorAll('.questions__button');
const answers = document.querySelectorAll('.questions__answer');

// Приховуємо всі відповіді
answers.forEach((answer) => {
  answer.style.display = 'none';
});

// Додаємо обробник події при кліку на кнопку
buttonsQuestions.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.parentElement.parentElement;
    const answer = card.querySelector('.questions__answer');

    // Змінюємо видимість відповіді
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
      button.textContent = '-';
    } else {
      answer.style.display = 'none';
      button.textContent = '+';
    }
  });
});
