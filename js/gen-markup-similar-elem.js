import {adverts} from './main';



// вспомогательные

//тип жилья сопоставить с подписями

const translatePopupType = (data) => {

const typeItem = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель'
};

const typesContainer = document.querySelector('.popup__features');
typesContainer.innerHTML = '';

data.forEach(type) => {
  const typeListItem = document.querySelector('.popup__type');

  typeListItem.classList.add('.popup__type');
  typeListItem.textContent = typeItem[type];
  typesContainer.append(typeListItem);

});
}

// вывести все доступные удобства в объявлении
const makeCardFeatures = (document, data) => {
  const featureContainer = document.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const modifiers = data.map((dataItem) => '.popup__feature'+ dataItem);
  featureList.forEach((featureListItem) => {
    const modifier = featureListItem.classList[1];
    if (!modifiers.includes(modifier)) {
      featureListItem.remove();
    }
  });
}


// вывести и сопоставить фото
const makeCardPhotos = (document, photos) => {
  for (let i = 0; i<photos.length; i++) {
    document.querySelector('.popup__photos').src = photos[i];
    return
  }
};

// прячем пустые блоки
const checkEmptyBlock = (document) => {
const popup = document.querySelector('.popup');
  for (let i=0; i<popup.children.length; i++) {
    if (popup.children[i].textContent ==='') {
      popup.children[i].classList.add('hidden');
    }
  }
};


// добавить данные в шаблон

const cardTemplate = document.querySelector('#card')

const popupFragment = document.createDocumentFragment();

const makeCardList = () => {
  adverts.forEach({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
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

const mapCanvas = document.querySelector('#map-canvas');
const cardList = makeCardList();
const firstCardItem = cardList.querySelectorAll('.popup');
mapCanvas.appendChild(firstCardItem[0]);







