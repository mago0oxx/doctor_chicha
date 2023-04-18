import auth0 from 'auth0-js';

const auth0Config = {
  domain: 'dev-wjbjlspbqtnpjyr3.us.auth0.com',
  clientID: '9oC1GDTfegu20HlgZaKGE07GM0dvA1gO',
  redirectUri: 'http://localhost:3001/',
  responseType: 'token ',
  scope: 'openid'
};

const auth0Client = new auth0.WebAuth(auth0Config);