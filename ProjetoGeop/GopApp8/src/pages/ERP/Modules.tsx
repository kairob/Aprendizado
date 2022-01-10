/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {Center} from 'native-base';
import { Appbar } from 'react-native-paper';
////////////////////////////////////////////////////////////////////////////////////////////
//Parametros de navegação
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Modules'>;
///////////////////////////////////////////////////////////////////////////////////////////
import StylePage from '../../PageGlobalStyle/PageStyle';



export default function Modulos() {
  const navigation = useNavigation<homeScreenProp>();
  
  return (
    <SafeAreaView style={StylePage.ContainerModules}>
      <StatusBar backgroundColor="cornflowerblue" barStyle="dark-content" />
      <ScrollView>

        <View>
        <Appbar.Header  style={{backgroundColor: 'cornflowerblue'}}>
      <Appbar.BackAction onPress={()=> navigation.navigate('Home')} />
      <Appbar.Content title="Opções" subtitle="Unidade" />
      
    </Appbar.Header>
         
        </View>
        <View style={StylePage.ContainerBodyModules}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoecAutomatica');
            }}
            style={StylePage.TouchableModules}>
            <Center>
              <Text>LoecAutomatica</Text>
            </Center>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SmartPhones');
            }}
            style={StylePage.TouchableModules}>
            <View>
              <Text>SmartPhones</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cars');
            }}
            style={StylePage.TouchableModules}>
            <View>
              <Text>Veiculos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ActivitySchedule');
            }}
            style={StylePage.TouchableModules}>
            <View>
              <Text>Programação das Atividades</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Effective');
            }}
            style={StylePage.TouchableModules}>
            <View>
              <Text>Efetivo</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
