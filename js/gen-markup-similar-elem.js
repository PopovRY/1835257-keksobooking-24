import {createAdvertisement} from './util.js';
import {
  FEATURES,
} from './data.js';







const listCard = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card')

const cardElement = cardTemplate.cloneNode(true);
listCard.appendChild(cardElement);

const similarAdvertisements = createAdvertisement();

const similarListFragment = document.createDocumentFragment();

similarAdvertisements.forEach({author, offer, location}) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__avatar').textContent = author.avatar;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = offer.type;


  cardElement.querySelector('.popup__text--capacity').textContent = `Заезд после ${offer.checkin}}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__features').textContent = offer.features;
  cardElement.querySelector('.popup__description').textContent = offer.description ;
  cardElement.querySelector('.popup__photos').textContent = offer.photos ;



  similarListFragment.appendChild(cardElement);
});

listCard.appendChild(similarListFragment);



const featureContainer = document.querySelector('.popup__features');
const featureListFragment = document.createDocumentFragment();

FEATURES.forEach((feature) => {
  const featureListItem = featureContainer.querySelector('.popup__feature--'+ feature);

  if (featureListItem) {
    featureListFragment.append(featureListItem);
  }
});

featureContainer.innerHTML = '';
featureContainer.append(featureListFragment);


