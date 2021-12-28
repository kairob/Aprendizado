/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';

////////////////////////////////////////////////////////////////////////////////////////////
//Parametros de navegação
import {RootStackParamsList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'ProdInd'>;
///////////////////////////////////////////////////////////////////////////////////////////
import StylePage from '../PageGlobalStyle/PageStyle';

export default function ProdInd() {
  return (
    <SafeAreaView style={StylePage.Container}>
      <StatusBar backgroundColor="lightskyblue" barStyle="dark-content" />
      <View style={StylePage.containerHeader} />
    </SafeAreaView>
  );
}
