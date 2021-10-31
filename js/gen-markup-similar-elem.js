import {createAdvertisement} from './util.js';
import {
  FEATURES,
} from './data.js';



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

// вспомогательные


const translatePopupType = () => {}


const makeCardFeatures = () => {};


const makeCardPhotos = () => {};

const checkEmptyBlock = () => {

};

// добавить данные в шаблон

const cardTemplate = document.querySelector('#card')

const adverts = createAdvertisement();

const popupFragment = document.createDocumentFragment();

const makeCardList = () => {
adverts.forEach(({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  //cardElement.querySelector('.popup__text--address').textContent = '';
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = translatePopupType(offer.type);
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  makeCardFeatures(cardElement, offer.features);
  cardElement.querySelector('.popup__description').textContent = offer.description ;
  makeCardPhotos(cardElement, offer.photos);
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  checkEmptyBlock(cardElement);
  popupFragment.appendChild(cardElement);
});
return popupFragment;
};



// отрисовать карточку

const mapCanvas = document.querySelector('#map-canvas');
const cardList = makeCardList();
const firstCardItem = cardList.querySelectorAll('.popup');
mapCanvas.appendChild(firstPopupItem[0]);





