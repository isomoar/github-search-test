import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { DevTools } from './components';
import { App } from 'containers';
import createStore from './redux/create';

const store = createStore();
const root = document.getElementById('root');

if (__DEVTOOLS__ && !window.devToolsExtension) {
  render(
    <Provider store={store} key="provider">
      <div>
        <App />
         <DevTools />
      </div>
    </Provider>,
    root
  );
} else {
  render(
    <Provider store={store} key="provider">
      <App />
    </Provider>,
    root
  );
}
