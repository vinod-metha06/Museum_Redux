import React from 'react';
import {Provider} from 'react-redux';
import {MesueumAppStack} from './src/Navigation/AppStack';
import {store} from './src/store/store';

const App = () => (
  <Provider store={store}>
    <MesueumAppStack />
  </Provider>
);

export default App;
