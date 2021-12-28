/* eslint-disable prettier/prettier */
import React from 'react';
import {View,SafeAreaView, StatusBar} from 'react-native';
import {RootStackParamsList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
//import StylePage from '../../PageGlobalStyle/PageStyle';

////////////////////////////////////////////////////////////////////////////////////////////////
//Parametros de Navegação
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'SectorYellow'
  >;
////////////////////////////////////////////////////////////////////////////////////////////////
export default function SectorYellow() {
  return (
    <SafeAreaView >
      <StatusBar backgroundColor="lightskyblue" barStyle="dark-content" />
      <View />
      <View />
      <View />
    </SafeAreaView>
  );
}
