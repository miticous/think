import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import thunk from 'redux-thunk';
import { I18nextProvider } from 'react-i18next';
import { reducers } from './ducks/index';
import AppContainer from './routes';
import reactotron from './config/reactotronConfig';
import i18n from './assets/locales/i18n';

const store = __DEV__
  ? createStore(reducers, reactotron.createEnhancer(applyMiddleware(thunk)))
  : createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <ReduxProvider store={store}>
    <I18nextProvider i18n={i18n}>
      <AppContainer />
    </I18nextProvider>
  </ReduxProvider>
);

export default App;
