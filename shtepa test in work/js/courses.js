// Отримуємо необхідні елементи з HTML
const button = document.querySelector('.courses__button');
const cards = document.querySelectorAll('.courses__cards');

// Встановлюємо початкові значення
let showAll = false;
let currentVisible = 1;

// Функція для перевірки стану кнопки
function updateButton() {
  if (showAll) {
    button.innerHTML = '<span class="courses__span--color"><span class="courses__span--opacity">Less</span></span>';
  } else {
    button.innerHTML = '<span class="courses__span--color"><span class="courses__span--opacity">More</span></span>';
  }
}

// Функція, яка відображає потрібну кількість карток
function showCards() {
  cards.forEach((card, index) => {
    if (showAll || index < currentVisible) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Додаємо обробник події при кліку на кнопку
button.addEventListener('click', () => {
  showAll = !showAll;

  if (showAll) {
    currentVisible = cards.length;
  } else {
    currentVisible = 1;
  }

  showCards();
  updateButton();
});

// Викликаємо функцію showCards() для встановлення початкового стану
showCards();
updateButton();
