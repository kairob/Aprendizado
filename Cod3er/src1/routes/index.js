import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNav from './Drawer.routes';
//import Login from './Login.routes';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Screen>
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
    </Stack.Screen>
  );
}
