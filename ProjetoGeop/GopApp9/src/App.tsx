/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Principal from './Principal';
import BottonsIcon from './Principal';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DashboardPanel from './Modules/DashboardPanel';
import Effective from './Modules/Effective';
import NewEffective from './Modules/Effective/NewEffective';
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

//
//import DetailsEffective from './pages/ERP/Effectve/DetailsEffective';
//import FabButton from './pages/ERP/Effectve/components/FabButton';
//import Formularios from './Formick/Main'
import {NativeBaseProvider} from 'native-base';

export type RootStackParamsList = {
  Home: undefined;
  BottonsIcon: undefined;
  DashboardPanel: undefined;
  Effective: undefined;
  NewEffective: undefined;
};
const Stack = createNativeStackNavigator();
export default function App() {
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
            <Stack.Screen
              name="NewEffective"
              component={NewEffective}
              options={{
                
                headerStyle: {
                  backgroundColor: '#0369a1',
                },
                headerTitleStyle: {
                  color: 'white',
                },
                
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

const ScreenOptions = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#0369a1',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#fff',
  },
  headerLeft: {
    color: '#fff',
  },
});
