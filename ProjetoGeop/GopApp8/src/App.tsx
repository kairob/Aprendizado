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
import Cars from './pages/ERP/Effectve/Cars';
import Forms from './pages/ERP/Forms';
import ActivitySchedule from './pages/ERP/ActivitySchedule';
import Effective from './pages/ERP/Effectve/Effective';
import NewEffective from './pages/ERP/Effectve/NewEffective';
import DetailsEffective from './pages/ERP/Effectve/DetailsEffective';
import FabButton from './pages/ERP/Effectve/components/FabButton';
import Formularios from './Formick/Main'
import {NativeBaseProvider} from 'native-base';

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
  ActivitySchedule: undefined;
  Effective: undefined;
  FabButton: undefined;
  NewEffective: undefined;
  DetailsEffective: undefined;
  Formularios: undefined;
};
const Stack = createNativeStackNavigator();
export default function A() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
           
            initialRouteName="Home">
            <Stack.Screen  options={{headerShown: false}} name="Home" component={Principal} />
            <Stack.Screen  options={{headerShown: false}} name="Group" component={SectorYellow} />
            <Stack.Screen  options={{headerShown: false}} name="ProdInd" component={ProdInd} />
            <Stack.Screen  options={{headerShown: false}} name="BottonFooter" component={BottonFooter} />
            <Stack.Screen  options={{headerShown: false}} name="Sector" component={Sector} />
            <Stack.Screen options={{headerShown: false}}  name="Peoples" component={Peoples} />
            <Stack.Screen  options={{headerShown: false}} name="BodyCustomHome" component={BodyCustomHome} />
            <Stack.Screen  options={{headerShown: false}} name="Modules" component={Modules} />
            <Stack.Screen  options={{headerShown: false}} name="LoecAutomatica" component={LoecAutomatica} />
            <Stack.Screen  options={{headerShown: false}} name="SmartPhones" component={SmartPhones} />
            <Stack.Screen  options={{headerShown: false}} name="Forms" component={Forms} />
            <Stack.Screen  options={{headerShown: false}} name="Cars" component={Cars} />
            <Stack.Screen
               options={{headerShown: false}} name="ActivitySchedule"
              component={ActivitySchedule}
            />
            <Stack.Screen  options={{headerShown: false}} name="Effective" component={Effective} />
            <Stack.Screen options={{headerShown: false}}  name="NewEffective" component={NewEffective} />
            <Stack.Screen  options={{headerShown: false}} name="FabButton" component={FabButton} />

            
            <Stack.Screen
              options={{headerShown: false}} 
              name="DetailsEffective"
              component={DetailsEffective}
            />
            <Stack.Screen
              options={{headerShown: false}} 
              name="Formularios"
              component={Formularios}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
