import {createAdvertisement} from './util';

// Собираем массив

const NUMBER_OF_OBJ = 10;
const objectGenerator = new Array(NUMBER_OF_OBJ).fill(null).map(createAdvertisement);

objectGenerator;

