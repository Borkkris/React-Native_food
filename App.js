import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//screens
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  // on default show the search screen
  initialRouteName: 'Search',
  // shows always a default title
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);  