import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './Home.routes';
import TabNav from './Tab.routes';
import NestingNav from './Nesting.routes';

const Drawer = createDrawerNavigator();
export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={TabNav} />
      <Drawer.Screen name="Perfil" component={NestingNav} />
    </Drawer.Navigator>
  );
}
