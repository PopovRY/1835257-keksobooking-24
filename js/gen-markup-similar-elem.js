
//тип жилья сопоставить с подписями


const translateCardType = (data) => {

  const typeItem = {
    'Дворец': 'palace',
    'Квартира': 'flat',
    'Дом': 'house',
    'Бунгало': 'bungalow',
    'Отель': 'hotel',
  };


  for (const key in typeItem) {

    if (typeItem[key] === data) {
      return key;
    }

  }
};


//вывести все доступные удобства в объявлении
const makeCardFeatures = (document, data) => {
  const featureContainer = document.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const modifiers = data.map((dataItem) => `'.popup__feature--'${dataItem}`);

  featureList.forEach((featureListItem) => {
    const modifier = featureListItem.classList[1];
    if (!modifiers.includes(modifier)) {
      featureListItem.remove();
    }
  });
};


// вывести и сопоставить фото
const makeCardPhotos = (container, sources) => {
  const cardPhoto = container.querySelector('.popup__photo');
  container.innerHTML = '';

  const fragmentPhoto = document.createDocumentFragment();

  sources.forEach((source) => {
    const newPhoto = cardPhoto.cloneNode(true);
    newPhoto.src = source;
    fragmentPhoto.appendChild(newPhoto);
  });

  return fragmentPhoto;
};

// прячем пустые блоки
/*const checkEmptyBlock = (document) => {
  const popup = document.querySelector('.popup');
  for (let i=0; i<popup.children.length; i++) {
    if (popup.children[i].textContent ==='') {
      popup.children[i].classList.add('hidden');
    }
  }
};
*/
// склоняем
const makeDeclension = (number, Arr) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return Arr[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

// добавить данные в шаблон

const cardTemplate = document.querySelector('#card').content;


const makeCardList = ({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);
  const title = cardElement.querySelector('.popup__title');
  if (offer.title) {
    title.textContent = offer.title;
  } else {
    title.remove();
  }
  const address = cardElement.querySelector('.popup__text--address');
  if (offer.address) {
    address.textContent = offer.address;
  } else {
    address.remove();
  }
  const price = cardElement.querySelector('.popup__text--price');
  if (offer.price) {
    price.textContent = `${offer.price} ₽/ночь`;
  } else {
    price.remove();
  }
  const type = cardElement.querySelector('.popup__type');
  if (offer.type) {
    type.textContent = translateCardType(offer.type);
  } else {
    type.remove();
  }
  const capacity = cardElement.querySelector('.popup__text--capacity');
  if (offer.rooms && offer.guests) {
    capacity.textContent = `${offer.rooms} ${makeDeclension(`${offer.rooms}`, ['комната', 'комнаты', 'комнат'])} для ${offer.guests} ${makeDeclension(`${offer.guests}`, ['гостя', 'гостей', 'гостей'])}`;
  } else {
    capacity.remove();
  }
  const time = cardElement.querySelector('.popup__text--time');
  if (offer.checkin && offer.checkout) {
    time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    time.remove();
  }
  const description = cardElement.querySelector('.popup__description');
  if (offer.description) {
    description.textContent = offer.description;
  } else {
    description.remove();
  }
  const avatar = cardElement.querySelector('.popup__avatar');
  if (author.avatar) {
    avatar.src = author.avatar;
  } else {
    avatar.remove();
  }
  const photoContainer = cardElement.querySelector('.popup__photos');
  if (offer.photos) {
    photoContainer.appendChild(makeCardPhotos(photoContainer, offer.photos));
  } else {
    photoContainer.remove();
  }
  const features = cardElement.querySelector('.popup__features');
  if (offer.features) {
    makeCardFeatures(offer.features, features);
  } else {
    features.remove();
  }

  return cardElement;
};


export {makeCardList};
