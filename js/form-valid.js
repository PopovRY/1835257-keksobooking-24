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
