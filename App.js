import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import { store } from './src/store/store';

import AppNavigation from './src/navigations/Navigation';

const App = () => {

  return (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
  );
};

export default App;
