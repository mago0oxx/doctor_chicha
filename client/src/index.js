import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider} from "@auth0/auth0-react";




ReactDOM.render(
<Provider store={store}>
  <Auth0Provider 
  domain="dev-wjbjlspbqtnpjyr3.us.auth0.com"
  clientId="tSHvbHftdWgrPkmGyla9CdS1QkUjGoeu"
  authorizationParams={{
    redirect_uri: window.location.origin
  }} >
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </Auth0Provider> 
  </Provider>,

  document.getElementById('root')
);

