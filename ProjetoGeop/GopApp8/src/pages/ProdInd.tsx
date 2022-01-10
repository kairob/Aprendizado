/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import { Appbar } from 'react-native-paper';

////////////////////////////////////////////////////////////////////////////////////////////
//Parametros de navegação
import {RootStackParamsList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'ProdInd'>;
///////////////////////////////////////////////////////////////////////////////////////////
import StylePage from '../PageGlobalStyle/PageStyle';

export default function ProdInd() {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <SafeAreaView style={StylePage.Container}>
      <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
    </SafeAreaView>
  );
}
