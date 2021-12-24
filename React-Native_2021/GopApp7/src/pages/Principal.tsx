/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StylePage from '../PageGlobalStyle/PageStyle';
//import HeaderCustomHome from '../HeaderGlobal/HeaderCustomHome';
import BodyCustomHome from '../BodyGlobal/BodyCustomHome';
import BottonFooter from '../BodyGlobal/BottonFooter';
//import {RootStackParamsList} from '../App';
//import {NativeStackNavigationProp} from '@react-navigation/native-stack';

//type homeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

export default function Principal() {
  return (
    <SafeAreaView style={StylePage.Container}>
      <StatusBar backgroundColor="cornflowerblue" barStyle="light-content" />
      <View style={StylePage.containerHeader} />
      <View style={StylePage.ContainerBody}>
        <BodyCustomHome />
      </View>
      <View style={StylePage.ContainerFooter}>
        <BottonFooter />
      </View>
    </SafeAreaView>
  );
}
