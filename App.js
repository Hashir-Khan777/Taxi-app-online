import React from 'react';
import {StackNavigation} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const App = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
    <StackNavigation />
  </NavigationContainer>
);

export default App;
