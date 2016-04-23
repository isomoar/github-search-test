import 'isomorphic-fetch';

const BASE_URL = 'https://api.github.com';

export default function request(url, options) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(new Error('There is no URL provided for the request.'));
    }

    if (!options) {
      reject(new Error('There are no options provided for the request.'));
    }
    
    options.headers = {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     };
    
    fetch(BASE_URL + url, options).then(response => {
      if (response.status > 200 && response.status < 400) reject(response);
      return response.json();
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}