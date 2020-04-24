import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/home.screen';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          options={{
            header: () => null,
          }}
          name="Home"
          component={Home}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
