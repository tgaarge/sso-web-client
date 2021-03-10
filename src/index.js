import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import IntlProviderComponent from './translation/IntlProviderComponent'

ReactDOM.render(
  <React.StrictMode>
    <IntlProviderComponent>
      <App />
    </IntlProviderComponent>
  </React.StrictMode>,
  document.getElementById('root')
);
