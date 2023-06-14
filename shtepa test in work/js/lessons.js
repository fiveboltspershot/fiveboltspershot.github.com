// Отримуємо необхідні елементи з HTML
const buttonLessons = document.querySelector('.lessons__button');
const cardsLessons = document.querySelectorAll('.lessons__cards');

// Встановлюємо початкові значення
let showAllLessons = false;
let currentVisibleLessons = 1;

// Функція для перевірки стану кнопки
function updateButtonLessons() {
  if (showAllLessons) {
    buttonLessons.innerHTML = '<span class="lessons__span--color"><span class="lessons__span--opacity">Less</span></span>';
  } else {
    buttonLessons.innerHTML = '<span class="lessons__span--color"><span class="lessons__span--opacity">More</span></span>';
  }
}

// Функція, яка відображає потрібну кількість карток
function showCardsLessons() {
  cardsLessons.forEach((cards, index) => {
    if (showAllLessons || index < currentVisibleLessons) {
      cards.style.display = 'flex';
    } else {
      cards.style.display = 'none';
    }
  });
}

// Додаємо обробник події при кліку на кнопку
buttonLessons.addEventListener('click', () => {
  showAllLessons = !showAllLessons;

  if (showAllLessons) {
    currentVisibleLessons = cardsLessons.length;
  } else {
    currentVisibleLessons = 1;
  }

  showCardsLessons();
  updateButtonLessons();
});

// Викликаємо функцію showCardsLessons() для встановлення початкового стану
showCardsLessons();
updateButtonLessons();
