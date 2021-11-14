import {getActiveState, adForm} from './form-valid';
import {makeCardList} from './util';


const INITIAL_COORDS = {
  lat: 35.4200,
  lng: 139.2530,
};

const map = L.map('map-canvas')
  .on('load', () => {
    getActiveState();
    adForm.address.value = `${INITIAL_COORDS.lat}, ${INITIAL_COORDS.lng}`;
  })
  .setView({
    lat: 35.4200,
    lng: 139.2530,
  },10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// настройка осн маркера

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// настройка обычных маркеров

const regularPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: INITIAL_COORDS.lat,
    lng: INITIAL_COORDS.lat,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('drag', (evt) => {
  const coords = evt.target.getLatLng();
  adForm.address.value = `${coords.lat.toFixed(5)}, ${coords.lat.toFixed(5)}`;
});

const renderPoints = (ads) => {
  ads.forEach((ad) => {
    const regularPinMarker = L.marker(
      {
        lat: ad.location.lat,
        lng: ad.location.lng,
      },
      {
        draggable: false,
        icon: regularPinIcon,
      },
    );
    regularPinMarker
      .addTo(map)
      .bindPopup(makeCardList(ad),
      );
  });
};

renderPoints();
