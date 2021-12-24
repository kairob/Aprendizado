/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import ModalPagePrincipal from '../Modal/ModalPagePrincipal';

////////////Navigation
import {RootStackParamsList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'BodyCustomHome'
>;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import Style from './Styles';


function BodyCustomHome() {
  return (
    <>
      <View style={Style.ContainerBody}>
        <View style={Style.BoxHeaders}>
          <Text style={Style.FonteHeaders}>Vila Guilherme</Text>
        </View>
        <View style={Style.BoxHome}>
          <Text style={Style.FonteTitle}>Gestão Operacional</Text>
          <ModalPagePrincipal />
        </View>
      </View>
    </>
  );
}
export default BodyCustomHome;
