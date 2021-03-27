import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';

const Stack = createStackNavigator();
export default function LoginScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name=" Login" component={Login} />
    </Stack.Navigator>
  );
}
