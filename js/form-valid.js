
const roomNumberSelect = document.querySelector('#room_number');

const capacitySelect = document.querySelector('#capacity');

const roomsAndCapacityMap = {
  'bungalo': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

const adForm = document.querySelector('.ad-form');

//Синхронизация полей (Количество комнат и Количество мест)
roomNumberSelect.addEventListener('change', () => {
  const currentVal = this.value;
  if (currentVal === 100) {
    for (let i=0; i < capacitySelect.children.length; i++) {
      capacitySelect.children[i].disabled = true;
    }
    capacitySelect.children[capacitySelect.children.length - 1].disabled = false;
    capacitySelect.children[capacitySelect.children.length - 1].selected = true;
  } else {
    for (let i = 0; i < capacitySelect.children.length; i++) {
      if (i < currentVal) {
        capacitySelect.children[i].disabled = false;
      } else {
        capacitySelect.children[i].disabled = true;
      }
    }
    capacitySelect.children[0].selected = true;
  }
});

//Синхронизация полей (Время заезда и Время выезда)

const timeinSelector = document.querySelector('#timein');
timeinSelector.addEventListener('change',() => {
  const timeoutSelector = document.querySelector('#timeout').value;
  if (timeinSelector.value !== timeoutSelector) {
    timeinSelector.setCustomValidity(`Значение должно быть равно ${timeoutSelector}`);
  } else {
    timeinSelector.setCustomValidity('');
  }
});


//Взаимодействие полей Тип жилья и Цена за ночь. Валидация поля Цена за ночь.
const apartamentInputElement = adForm.querySelector('select[name="type"]');
const priceInputElement = adForm.querySelector('input[name="price"]');

apartamentInputElement.addEventListener('change', () => {
  const minPrice = roomsAndCapacityMap[apartamentInputElement.value];
  priceInputElement.min = minPrice;
  priceInputElement.placeholder = minPrice;
});


//неактивное состояние

const getDisactiveState = () => {
  adForm.classList.add('ad-form--disabled');
  for (let i=0; i < adForm.children.length; i++) {
    adForm.children[i].disabled = true;
  }
  const mapFilters = document.querySelector('.map__features');
  mapFilters.classList.add('ad-form--disabled');
  for (let i=0; i < mapFilters.children.length; i++) {
    mapFilters.children[i].disabled = true;
  }
};

getDisactiveState();

// активное состояние

const getActiveState = () => {
  adForm.classList.remove('ad-form--disabled');
  for (let i=0; i < adForm.children.length; i++) {
    adForm.children[i].disabled = false;
  }
  const mapFilters = document.querySelector('.map__features');
  mapFilters.classList.remove('ad-form--disabled');
  for (let i=0; i < mapFilters.children.length; i++) {
    mapFilters.children[i].disabled = false;
  }
};

getActiveState();

export {getActiveState, getDisactiveState, adForm};
