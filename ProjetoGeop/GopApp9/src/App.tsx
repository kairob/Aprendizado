/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Principal from './Principal';
import BottonsIcon from './Principal';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DashboardPanel from './Modules/DashboardPanel';
import Effective from './Modules/Effective';
//import BottonFooter from './BodyGlobal/BottonFooter';
//import Sector from './pages/Group/Sector';
//import Peoples from './pages/Peoples';
//import BodyCustomHome from './BodyGlobal/BodyCustomHome';
//import LoecAutomatica from './pages/ERP/LoecAutomatica';
//import Modules from './pages/ERP/Modules';
//import SmartPhones from './pages/ERP/SmartPhones';
//import Cars from './pages/ERP/Effectve/Cars';
//import Forms from './pages/ERP/Forms';
//import ActivitySchedule from './pages/ERP/ActivitySchedule';

//import NewEffective from './pages/ERP/Effectve/NewEffective';
//import DetailsEffective from './pages/ERP/Effectve/DetailsEffective';
//import FabButton from './pages/ERP/Effectve/components/FabButton';
//import Formularios from './Formick/Main'
import {NativeBaseProvider} from 'native-base';

export type RootStackParamsList = {
  Home: undefined;
  BottonsIcon: undefined;
  DashboardPanel: undefined;
  Effective: undefined;
};
const Stack = createNativeStackNavigator();
export default function A() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={Principal}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="BottonsIcon"
              component={BottonsIcon}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Effective"
              component={Effective}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="DashboardPanel"
              component={DashboardPanel}
            />
            

          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
