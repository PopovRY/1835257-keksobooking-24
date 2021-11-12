const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');

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


const timeinSelector = document.querySelector('#timein');
timeinSelector.addEventListener('change',() => {
  const timeoutSelector = document.querySelector('#timeout').value;
  if (timeinSelector.value !== timeoutSelector) {
    timeinSelector.setCustomValidity(`Значение должно быть равно ${timeoutSelector}`);
  } else {
    timeinSelector.setCustomValidity('');
  }
});


//неактивное состояние

const getDisactiveState = () => {
  const form = document.querySelector('.ad-form');
  form.classList.add('ad-form--disabled');
  for (let i=0; i < form.children.length; i++) {
    form.children[i].disabled = true;
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
  const form = document.querySelector('.ad-form');
  form.classList.remove('ad-form--disabled');
  for (let i=0; i < form.children.length; i++) {
    form.children[i].disabled = false;
  }
  const mapFilters = document.querySelector('.map__features');
  mapFilters.classList.remove('ad-form--disabled');
  for (let i=0; i < mapFilters.children.length; i++) {
    mapFilters.children[i].disabled = false;
  }
};

getActiveState();
