import {renderPoints} from './map.js';
import {getData} from './api.js';
import {clickOnSubmitForm} from './form-valid.js';

const POINTS_COUNT = 10;

getData((advertisements) => {
  renderPoints(advertisements.slice(0, POINTS_COUNT));
});

clickOnSubmitForm();
