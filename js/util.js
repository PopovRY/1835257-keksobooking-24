import {
  FEATURES,
  LAT_LIMIT_MAX,
  LAT_LIMIT_MIN,
  LNG_LIMIT_MAX,
  LNG_LIMIT_MIN,
  NUMBER,
  PHOTOS,
  TIMES,
  TYPES
} from './data.js';

//Получить случайное целое число из диапазона

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    throw new Error('Недопустимое значение диапазона');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;};

// Вспомогательные функции
const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

let referenceNumber;
const getRandomAvatar = () => {
  referenceNumber = getRandomArrayElement(NUMBER);
  if (referenceNumber < 10) {
    return (`img/avatars/user0${referenceNumber}.png`);
  }
  return (`img/avatars/user${referenceNumber}.png`);
};

const getRandomLocationPoint = (min, max, decimalPlaces) => {
  if (min >= max) {
    throw new Error('Недопустимое значение диапазона');
  }
  return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
};


const getRandomArrayElements = (arr) => {
  const maxLength = arr.length;
  const lengthOfArray = getRandomInteger(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomInteger(0, maxLength - 1);
    const el = arr[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
};

const createAdvertisement = () => {
  const randomLat = getRandomLocationPoint(LAT_LIMIT_MIN, LAT_LIMIT_MAX, 5);
  const randomLng = getRandomLocationPoint(LNG_LIMIT_MIN, LNG_LIMIT_MAX, 5);

  return {
    author: {
      avatar: getRandomAvatar(),
    },
    offer: {
      title: 'Продам гараж',
      address: `${randomLat}, ${randomLng}`,
      price: getRandomInteger(5000, 20000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 5),
      guest: getRandomInteger(1, 5),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getRandomArrayElements(FEATURES),
      description: 'Чудесная бетонная коробка',
      photos: getRandomArrayElements(PHOTOS),
    },
    location: {
      lat: randomLat,
      lng: randomLng,
    },
  };
};

const NUMBER_OF_OBJ = 10;
const advertisements = new Array(NUMBER_OF_OBJ).fill(null).map(createAdvertisement);


export {advertisements};

