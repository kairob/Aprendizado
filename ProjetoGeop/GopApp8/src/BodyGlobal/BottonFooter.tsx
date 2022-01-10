/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from './Styles';
import {RootStackParamsList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';

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
          <View style={Styles.BottonGroup} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Modules')}>
          <View style={Styles.BottonsProd}>
            <Text>ERP</Text>
          </View>
        </TouchableOpacity>
        <Button icon="account-tie-outline" >
        <TouchableOpacity onPress={() => navigation.navigate('Effective')}>
          <View style={Styles.BotonRH}>

            <Text>Pessoas</Text>
          </View>
        </TouchableOpacity>
        </Button>
      </View>
      
    </>
  );
}
export default BottonFooter;
