import {createAdvertisement} from './util.js';
import './map.js';
import './gen-markup-similar-elem';
import './form-valid';


// Собираем массив

const NUMBER_OF_OBJ = 10;
const objectGenerator = new Array(NUMBER_OF_OBJ).fill(null).map(createAdvertisement);

const adverts = objectGenerator;

export {adverts};
