/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Principal from './pages/Principal';
import SectorYellow from './pages/Group/SectorYellow';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ProdInd from './pages/ProdInd';
import BottonFooter from './BodyGlobal/BottonFooter';
import Sector from './pages/Group/Sector';
import Peoples from './pages/Peoples';
import BodyCustomHome from './BodyGlobal/BodyCustomHome';
import LoecAutomatica from './pages/ERP/LoecAutomatica';
import Modules from './pages/ERP/Modules';
import SmartPhones from './pages/ERP/SmartPhones';
import Cars from './pages/ERP/Cars';
import Forms from './pages/ERP/Forms';

export type RootStackParamsList = {
  Home: undefined;
  SectorYellow: undefined;
  ProdInd: undefined;
  BottonFooter: undefined;
  Sector: undefined;
  Peoples: undefined;
  BodyCustomHome: undefined;
  LoecAutomatica: undefined;
  Modules: undefined;
  SmartPhones: undefined;
  Forms: undefined;
  Cars: undefined;
};
const Stack = createNativeStackNavigator();
export default function A() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Principal} />
          <Stack.Screen name="Group" component={SectorYellow} />
          <Stack.Screen name="ProdInd" component={ProdInd} />
          <Stack.Screen name="BottonFooter" component={BottonFooter} />
          <Stack.Screen name="Sector" component={Sector} />
          <Stack.Screen name="Peoples" component={Peoples} />
          <Stack.Screen name="BodyCustomHome" component={BodyCustomHome} />
          <Stack.Screen name="LoecAutomatica" component={LoecAutomatica} />
          <Stack.Screen name="Modules" component={Modules} />
          <Stack.Screen name="SmartPhones" component={SmartPhones} />
          <Stack.Screen name="Cars" component={Cars} />
          <Stack.Screen name="Forms" component={Forms} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
