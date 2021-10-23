const similarListCard = document.querySelector('#map-canvas');
const similarCardTemplate = document.querySelector('#card')

const cardElement = similarCardTemplate.cloneNode(true);
similarListCard.appendChild(cardElement);
