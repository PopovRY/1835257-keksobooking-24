import {createAdvertisement} from './util.js';

const listCard = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card')

const cardElement = cardTemplate.cloneNode(true);
listCard.appendChild(cardElement);

const similarAdvertisement = createAdvertisement();

similarAdvertisement.forEach((author, offer, location) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__avatar').textContent = author.avatar;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('').textContent = ;


  listCard.appendChild(cardElement);
});




