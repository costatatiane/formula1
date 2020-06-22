import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header/index';

import HomeScreen from './screens/Home';
import SeasonScreen from './screens/Season';
import RacesScreen from './screens/Races';
import DriversScreen from './screens/Drivers';
import CircuitsScreen from './screens/Circuits';
import ResultsScreen from './screens/Results';
import ConstructorsScreen from './screens/Constructors';
import RaceDetailScreen from './screens/RaceDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitle: Header,
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Season" component={SeasonScreen} />
          <Stack.Screen name="Races" component={RacesScreen} />
          <Stack.Screen name="Drivers" component={DriversScreen} />
          <Stack.Screen name="Circuits" component={CircuitsScreen} />
          <Stack.Screen name="Results" component={ResultsScreen} />
          <Stack.Screen name="Constructors" component={ConstructorsScreen} />
          <Stack.Screen name="RaceDetail" component={RaceDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}