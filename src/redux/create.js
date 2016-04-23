import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import DevTools from '../components/DevTools/DevTools';
import rootReducer from './reducers';

export default () => {
  let finalCreateStore;
  const middleware = [thunk];
  
  if (__DEVELOPMENT__ && __DEVTOOLS__) {
      const { persistState } = require('redux-devtools');
      
      finalCreateStore = compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
      )(_createStore);
    } else {
      finalCreateStore = applyMiddleware(...middleware)(_createStore);
    }

    const store = finalCreateStore(rootReducer);

    if (__DEVELOPMENT__ && module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers').default);
      });
    }
    
    return store;
  }