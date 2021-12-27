/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {RootStackParamsList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Sector'>;
import StylePage from '../../PageGlobalStyle/PageStyle';

export default function Sector() {
  return (
    <SafeAreaView style={StylePage.ContainerSector}>
      <StatusBar backgroundColor="lightskyblue" barStyle="dark-content" />
      <View style={StylePage.containerHeaderSector} />
      <View style={StylePage.ContainerBodySector} />
      <View style={StylePage.ContainerFooterSector} />
    </SafeAreaView>
  );
}
