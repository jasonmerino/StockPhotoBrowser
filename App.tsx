import 'mobx-react-lite/batchingForReactNative';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/home.screen';
import { Provider } from 'mobx-react';
import { Results } from './screens/results.screen';
import { RootStackParamList } from './types/navigator.types';

const AppStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen
            options={{
              header: () => null,
            }}
            name="Home"
            component={Home}
          />
          <AppStack.Screen name="Results" component={Results} />
        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
