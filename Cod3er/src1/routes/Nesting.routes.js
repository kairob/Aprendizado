import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContactsScreen from '../pages/Contacts';
import ProfileScreen from '../pages/Profile';
import GaleryScreen from '../pages/Galery';

const Stack = createStackNavigator();

export default function NestingNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
      initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen name="Galery" component={GaleryScreen} />
    </Stack.Navigator>
  );
}
