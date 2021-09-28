function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    console.log('Недопустимое значение диапазона');
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;}
console.log(getRandomIntInclusive(0, 50));

function getRandomFloat(min, max) {
  if (min >= max) {
    console.log('Недопустимое значение диапазона');
    return;
  }
  return Math.random() * (max - min) + min;}
console.log(getRandomFloat(0, 200));
