import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MyTabs from './navigation/Navigation';
import Main2 from './components/Main2Component'
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/LoadingComponent';

const { persistor, store } = ConfigureStore();

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
      <PersistGate
                loading={<Loading />}
                persistor={persistor}>
      <NavigationContainer>
        <Main2 />
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

