/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';

////////////////////////////////////////////////////////////////////////////////////////////
//Parametros de navegação
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Modules'>;
///////////////////////////////////////////////////////////////////////////////////////////
import StylePage from '../../PageGlobalStyle/PageStyle';
import StylesHeaders from '../../HeaderGlobal/StylesHeaders';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Modulos() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <SafeAreaView style={StylePage.ContainerModules}>
      <StatusBar backgroundColor="cornflowerblue" barStyle="dark-content" />
      <View style={StylePage.containerHeaderModules}>
        <View style={StylesHeaders.ContainerHeader}>
          <View style={StylesHeaders.BoxGroupHeadersLeft}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <View style={StylePage.BackButonModules}>
                <Icon name="left" size={15} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={StylesHeaders.BoxGroupHeadersCenter}>
            <Text style={StylePage.TitleModules}>Opções:</Text>
          </View>
          <View style={StylesHeaders.BoxGroupHeadersRight} />
        </View>
      </View>
      <View style={StylePage.ContainerBodyModules}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoecAutomatica');
          }}
          style={StylePage.TouchableModules}>
          <View>
            <Text>LoecAutomatica</Text>
          </View>
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
    </SafeAreaView>
  );
}
