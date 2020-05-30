import tokenService from './tokenService';

const BASE_URL = '/api/events/';

export default {
  index,
  create,
  slot
};

function index() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function create(event) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify(event)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function slot(event) {
  const options ={
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL + event._id, options).then(res => res.json()).then(event => event);
}