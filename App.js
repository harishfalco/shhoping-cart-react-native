import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Products} from './components/Products';
import {Order} from './components/Order';
import Provider from './Context/Provider';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
          <Stack.Screen name="products" component={Products} />
          <Stack.Screen name="order" component={Order} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
