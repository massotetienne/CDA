import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './store'

import App from './App';
import "./styles/index.scss";


render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

