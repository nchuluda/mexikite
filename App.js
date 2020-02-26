import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import MyTabs from './navigation/Navigation';
import Main2 from './components/Main2Component'

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main2 />
      </NavigationContainer>
    </Provider>
  );
}

