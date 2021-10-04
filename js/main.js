//Получить случайное целое число из диапазона

const getRandomPositiveInteger = (min, max) => {
min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    throw new Error('Недопустимое значение диапазона');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;};

//getRandomPositiveInteger(0, 500);

// Получить случайное положительное число с плавающей точкой

const getRandomPositiveFloat = (min, max, decimalPlaces) => {
  if (min >= max) {
    throw new Error('Недопустимое значение диапазона');
  }
  return (Math.random() * (max - min) + min).toFixed(decimalPlaces);};

//getRandomPositiveFloat(0, 200, 1);

// Функция для создания объекта с временными данными

/*



const announcementCount = 10;



const AUTHOR = AVATAR;

const OFFER = [TITLE, ADDRESS, PRICE, TYPE, ROOMS, GUESTS, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS];

const LOCATION = [lat, lng];

const createNewAuthor = () => {
  const randomAvatarIndex = getRandomPositiveInteger(0, 10);
  return {
    author: AUTHOR[randomAvatarIndex]};
}
const createNewOffer = () => {
  const randomTitleIndex = getRandomPositiveInteger(0, TITLE.length -1);
  const randomAddressIndex = LOCATION;
  const randomPriceIndex = PRICE;
  const randomTypeIndex = getRandomPositiveInteger(0, TYPE.length -1);
  const randomRoomsIndex = getRandomPositiveInteger(0, ROOMS.length -1);
  const randomGuestsIndex = getRandomPositiveInteger(0, GUESTS.length -1);
  const randomCheckinIndex = getRandomPositiveInteger(0, CHECKIN.length -1);
  const randomCheckoutIndex = getRandomPositiveInteger(0, CHECKOUT.length -1);
  const randomFeaturesIndex = Array.from({length: FEATURES.length}, () => Math.floor(Math.random() * FEATURES.length));

  const randomDescriptionIndex = getRandomPositiveInteger(0, DESCRIPTION.length -1);
  const randomPhotosIndex = Array.from({length: PHOTOS.length}, () => Math.floor(Math.random() * PHOTOS.length));
  return [OFFER];
}
const createNewLocation = () => {
  const randomLocationIndex = LOCATION;

  return [LOCATION];
}
*/

let referenceNumber = getRandomPositiveFloat(1,10);
if (referenceNumber < 10) {
  referenceNumber = '0'+referenceNumber;
}
const AVATAR = 'img/avatars/user' + referenceNumber +'.png';

const lat = getRandomPositiveFloat(35.65000, 35.70000, 5);

const lng = getRandomPositiveFloat(139.70000, 139.80000, 5);

const TITLE = "Заголовок предложения";

const ADDRESS = String(lat)+ ', ' + String(lng);

const PRICE = getRandomPositiveInteger(1,500);

const PLACES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TYPE =  PLACES[Math.floor(Math.random() * PLACES.length)];

const ROOMS = getRandomPositiveInteger(1,10);

const GUESTS = getRandomPositiveInteger(1,10);

const TIME = ['12:00', '13:00', '14:00'];

const CHECKIN = TIME[Math.floor(Math.random() * TIME.length)];

const CHECKOUT = TIME[Math.floor(Math.random() * TIME.length)];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function getArray(FEATURES) {
  const maxLength = FEATURES.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = FEATURES[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;

  function getRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
}

const DESCRIPTION = ['описание помещения'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

