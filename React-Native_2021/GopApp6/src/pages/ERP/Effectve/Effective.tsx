/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

////////////////////////////////////////////////////////////////////////////////////////////
//Parametros de navegação
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Effective'
>;
///////////////////////////////////////////////////////////////////////////////////////////
import StylePage from '../../../PageGlobalStyle/PageStyle';
import StylesHeaders from '../../../HeaderGlobal/StylesHeaders';
import Icon from 'react-native-vector-icons/AntDesign';
/////database////////////////////////////////
import firestore from '@react-native-firebase/firestore';
//import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
/////////////////////////////////////

export default function Effctive() {
  const navigation = useNavigation<homeScreenProp>();
  // const [Effctive, setEffctive] = useState([])

//  const db = getFirestore(appDatabase);

 // async function getEfetivo(db) {
 //   const efetivoCol = collection(db, 'Efetivo');
 //   console.log(efetivoSnap);
 //   const efetivoSnap = await getDocs(efetivoCol);
//    const efetivoList = efetivoSnap.docs.map(doc => doc.data());
//    return efetivoList;
//  }

  useEffect(() => {
    getEfetivo(db);
    // console.log(result);e
  }, [db]);

  return (
    <SafeAreaView style={StylePage.ContainerEffective}>
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
            <Text>Efetivo</Text>
          </View>
          <View style={StylesHeaders.BoxGroupHeadersRight} />
        </View>
      </View>
      <View style={StylePage.ContainerBodyEffective} />
      <View style={StylePage.ContainerFooterEffective} />
    </SafeAreaView>
  );
}
