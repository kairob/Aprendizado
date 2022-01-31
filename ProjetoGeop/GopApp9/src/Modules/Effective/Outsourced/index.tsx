import React from 'react';
import {VStack, FormControl, Box, HStack} from 'native-base';
import { StatusBar } from 'react-native';
import {Button, Appbar, TextInput,FAB} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
//////////////Parametros de Navegação/////////////////////////////////////////////////////
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'OutsourcedEmployee'
>;
///////////////////////////////////////////////////////////////////////////////
const OutsourcedEmployee = () => {
    const navigation = useNavigation<homeScreenProp>();
    return (
      <>
        <SafeAreaView>
          <StatusBar backgroundColor="#0369a1" barStyle="light-content" />
          <HStack
            bg="info.800"
            flex={1}
            alignItems="center"
            style={{position: 'relative'}}>
            <Box>
              <Appbar.Header
                style={{
                  backgroundColor: '#0369a1',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Appbar.BackAction
                  onPress={() => navigation.navigate('Effective')}
                />
                <Appbar.Content
                  title="Lista de Empregados"
                  subtitle="Terceirizados"
                />
              </Appbar.Header>
            </Box>
            <Box p={10} bg="info.800">
              teste
            </Box>
          </HStack>
        </SafeAreaView>
        <FAB
          style={{
            position: 'absolute',
            bottom: 60,
            right: 40,
            backgroundColor: '#0369a1',
          }}
          small
          icon="plus"
          onPress={() => navigation.navigate('NewOutsourced')}
        />
      </>
    );
}
export default OutsourcedEmployee