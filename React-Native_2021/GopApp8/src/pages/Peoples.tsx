/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {RootStackParamsList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import StylePage from '../PageGlobalStyle/PageStyle';

////////////////////////////////////////////////////////////////////////////////////////////////
//Parametros de Navegação
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Peoples'
>;
////////////////////////////////////////////////////////////////////////////////////////////////
export default function SectorYellow() {
  return (
    <SafeAreaView style={StylePage.ContainerPeoples}>
      <StatusBar backgroundColor="cornflowerblue" barStyle="dark-content" />
      <View style={StylePage.containerHeaderPeoples} />
      <View style={StylePage.ContainerBodyPeoples} />
      <View style={StylePage.ContainerFooterPeoples} />
    </SafeAreaView>
  );
}
