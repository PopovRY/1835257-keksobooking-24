import {showAlert} from './util.js';

const getData = (onSuccess, onError) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then ((responce) => {
      if(responce.ok) {
        return responce.json();
      }
      throw new Error();
    })
    .then((advertisements) =>{
      onSuccess(advertisements);
    })
    .catch(() => {
      onError();
    });
};


const sendData = (onSuccess, onError, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((responce) => {
      if (responce.ok) {
        return onSuccess();
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });
};


export {getData, sendData };
