const express = require('express')
const app = express();
const auth = require('jwks-rsa')
const router = express.Router();
//const auth0 = require('auth0-js');

const authConfig = {
    domain: 'dev-wjbjlspbqtnpjyr3.us.auth0.com',
    audience: 'https://Doctor-Chicha-end/',
    clientID: '9oC1GDTfegu20HlgZaKGE07GM0dvA1gO',
    redirectUri: 'http://localhost:3001/auth',
    responseType: 'token ',
    scope: 'openid'
  };

const jwtCheck = auth({
    secret: auth.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/auth.json`,
      }),
    audience: 'https://Doctor-Chicha-end/',
    issuer: 'https://dev-wjbjlspbqtnpjyr3.us.auth0.com/',
    algorithms: ["RS256"],
  });

  

// const router = express.Router();

// const authConfig = {
//   domain: process.env.AUTH0_DOMAIN,
//   audience: process.env.AUTH0_AUDIENCE,
//   clientID: 'tSHvbHftdWgrPkmGyla9CdS1QkUjGoeu',
//   redirectUri: 'http://localhost:3001/auth',
//   responseType: 'token ',
//   scope: 'openid'
// };

// const checkJwt = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
//   }),
//   audience: authConfig.audience,
//   issuer: authConfig.domain, 
//   algorithms: ["RS256"],
// });

module.exports = router