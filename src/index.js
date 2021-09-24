import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import './style/style.css';

const configStore = store();

ReactDOM.render(
  <Provider store={configStore}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
