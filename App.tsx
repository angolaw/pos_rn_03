/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Details from './src/pages/Details';

import Home from './src/pages/Home';
import New from './src/pages/New';

const App = () => {
  const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Listagem" component={Home} />
        <Stack.Screen name="Detalhes" component={Details} />
        <Stack.Screen name="Novo" component={New} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
