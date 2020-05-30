import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header/index';

import HomeScreen from './screens/Home';
import SeasonScreen from './screens/Season';
import { Platform } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitle: Header,
          headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? '#3c74d7' : '#93bb3a'
          }
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Season" component={SeasonScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}