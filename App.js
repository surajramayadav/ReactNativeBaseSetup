/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store,persistor} from './Redux/store';
import SocketContext, {socket} from './SocketContext';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import BottomTabs from './Routes/BottomTabs/BottomTabs';
import Drawers from './Routes/Drawers/Drawers';
import Navigation from './Routes/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SocketContext.Provider value={socket}>
          <PaperProvider>
            <Navigation/>
          </PaperProvider>
        </SocketContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
