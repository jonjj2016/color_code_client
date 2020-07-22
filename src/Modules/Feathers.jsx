import feathers from '@feathersjs/feathers';
import axios from 'axios';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';
const HOST = 'http://localhost:3030';
// const HOST = 'https://colorcode2020.herokuapp.com';

export const client = feathers()
  .configure(rest(HOST).axios(axios))
  .configure(
    auth({
      storage: window.localStorage,
    })
  );
if (localStorage.getItem('feathers-jwt')) {
  client.reAuthenticate();
}

export const myClient = client;
export const userService = client.service('users');
export const paletteService = client.service('palettes');
export const gradientService = client.service('gradients');
