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
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Forms'
>;
///////////////////////////////////////////////////////////////////////////////////////////
import StylePage from '../../PageGlobalStyle/PageStyle';
import StylesHeaders from '../../HeaderGlobal/StylesHeaders';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Forms() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <SafeAreaView style={StylePage.ContainerForms}>
      <StatusBar backgroundColor="cornflowerblue" barStyle="dark-content" />
      <View style={StylePage.containerHeader}>
        <View style={StylesHeaders.ContainerHeader}>
          <View style={StylesHeaders.BoxGroupHeadersLeft}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Modules');
              }}>
              <View style={StylePage.BackButonModules}>
                <Icon name="left" size={15} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={StylesHeaders.BoxGroupHeadersCenter}>
            <Text>Formularios:</Text>
          </View>
          <View style={StylesHeaders.BoxGroupHeadersRight} />
        </View>
      </View>

      <View style={StylePage.ContainerBodyForms} />
      <View style={StylePage.ContainerFooterForms} />
    </SafeAreaView>
  );
}