import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ClientsScreen from '../pages/Clients';
import settingsScreen from '../pages/settings';
//import Home from './Home.routes';

const Tab = createBottomTabNavigator();
export default function TabNav() {
  return (
    <Tab.Navigator initialRouteName="ClientsScreen">
      <Tab.Screen name="ClientsScreen" component={ClientsScreen} />
      <Tab.Screen name="settingsScreen" component={settingsScreen} />
    </Tab.Navigator>
  );
}
