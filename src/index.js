import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import './config/reactotron';
import store from './store';

import Routes from './routes';
import NavigationService from './services/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
};

export default App;
