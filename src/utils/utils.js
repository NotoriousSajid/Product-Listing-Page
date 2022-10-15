import axios from 'axios';

function apiRequest(url, method, params) {
  return params
    ? axios({
        url: url,
        method: method,
        data: params,
      })
    : axios({
        url: url,
        method: method,
        data: {},
      });
}

export function getAllProduct() {
  return apiRequest('https://dummyjson.com/products?limit=100', 'get');
}
