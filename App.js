import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MyTabs from './navigation/Navigation';
import Main2 from './components/Main2Component'

const store = ConfigureStore();

const fetchFonts = () => {
  return Font.loadAsync({
  'ostrich': require('./assets/fonts/ostrich-regular.ttf'),
  'pacifico': require('./assets/fonts/Pacifico.ttf'),
  
  });
};

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main2 />
      </NavigationContainer>
    </Provider>
  );
}

