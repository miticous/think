import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './ducks/index';
import AppContainer from './routes';
import reactotron from './config/reactotronConfig';

const store = __DEV__
  ? createStore(reducers, reactotron.createEnhancer(applyMiddleware(thunk)))
  : createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
