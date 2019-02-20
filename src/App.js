/* eslint react/no-did-mount-set-state: 0 */
import React, {  } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import './App.css';

import rootReducer from './rootReducer';


import Toggle from './Toggle';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(),
);

const App = () => (
  <Provider store={store}>
    <Toggle />
  </Provider>
);

export default App;
