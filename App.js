import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Products} from './components/Products';
import {Order} from './components/Order';
import {ScrollView, SafeAreaView, View, Text} from 'react-native';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="products" component={Products} />
        <Stack.Screen name="order" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
