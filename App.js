import React from 'react';

//react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import Home from './screens/Home';
import Season from './screens/Season';

const AppNavigator = createStackNavigator(
  // telas (rotas) que iremos navegar
  {
    // telas importadas
    Home: {
      screen: Home,
    },
    Season: {
      screen: Season,
    }
  },
  // default config
  {
    // rota inicial do aplicativo
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
    }
  },
);

export default createAppContainer(AppNavigator);