// Отримуємо необхідні елементи з HTML
const buttonMasters = document.querySelector('.masters__button');
const cardsMasters = document.querySelectorAll('.masters__cards');

// Встановлюємо початкові значення
let showAllMasters = false;
let currentVisibleMasters = 1;

// Функція для перевірки стану кнопки
function updateButtonMasters() {
  if (showAllMasters) {
    buttonMasters.innerHTML = '<span class="masters__span--color"><span class="masters__span--opacity">Less</span></span>';
  } else {
    buttonMasters.innerHTML = '<span class="masters__span--color"><span class="masters__span--opacity">More</span></span>';
  }
}

// Функція, яка відображає потрібну кількість карток
function showCardsMasters() {
  cardsMasters.forEach((card, index) => {
    if (showAllMasters || index < currentVisibleMasters) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Додаємо обробник події при кліку на кнопку
buttonMasters.addEventListener('click', () => {
  showAllMasters = !showAllMasters;

  if (showAllMasters) {
    currentVisibleMasters = cardsMasters.length;
  } else {
    currentVisibleMasters = 1;
  }

  showCardsMasters();
  updateButtonMasters();
});

// Викликаємо функцію showCardsMasters() для встановлення початкового стану
showCardsMasters();
updateButtonMasters();
