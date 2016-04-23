import 'isomorphic-fetch';

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
    
    fetch('https://api.github.com' + url, options).then(response => {
      return response.json();
    }).then(response => {
      if (response.message || !response.items) reject(response);
      else resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}