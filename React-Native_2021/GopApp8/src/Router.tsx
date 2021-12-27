/* eslint-disable prettier/prettier */

import React from 'react';
//import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Principal from './pages/Principal';
import SectorYellow from './pages/Group/SectorYellow';
const Stack = createNativeStackNavigator();

/*export type RootStackParamsList = {
  Home: undefined;
  Grupo: undefined;
};*/
export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Principal} />
        <Stack.Screen name="Group" component={SectorYellow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
