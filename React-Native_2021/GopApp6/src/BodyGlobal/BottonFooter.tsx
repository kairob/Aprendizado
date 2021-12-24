/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import Styles from './Styles';
import {RootStackParamsList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'BottonFooter'
>;

function BottonFooter() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <>
      <View style={Styles.ContainerFooter}>
        <TouchableOpacity onPress={() => navigation.navigate('ProdInd')}>
          <View style={Styles.BottonGroup}>
            <Icon name="profile" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Modules')}>
          <View style={Styles.BottonsProd}>
            <Text>ERP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Peoples')}>
          <View style={Styles.BotonRH}>
            <Text>Pessoas</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default BottonFooter;
