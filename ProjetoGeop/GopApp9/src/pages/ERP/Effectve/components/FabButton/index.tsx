import React from 'react';
import { View, Text } from 'react-native';
import { FAB } from 'react-native-elements';
import Formularios from '../../../../../Formick/Main'
////////////////////////////////////////////////////////////////////////////////////////////
//Parametros de navegação
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'FabButton'
>;
///////////////////////////////////////////////////////////////////////////////////////////

export default function FabButton()  {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 5,
          flexGrow: 1,
        }}
      >
      
       
       
        <FAB
          
          onPress={() => navigation.navigate('Formularios')}
          placement="right"
          
          icon={{ name: 'add', color: 'white' }}
          color="red"
        />
        
      </View>
    </>
  );
};