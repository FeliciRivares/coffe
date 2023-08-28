import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Root} from './src/root';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/store';
import './src/service/domain/app.service';
import 'react-native-reanimated'
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <Provider store={store}>
          <Root />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
