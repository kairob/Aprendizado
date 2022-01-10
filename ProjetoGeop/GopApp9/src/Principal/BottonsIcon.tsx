import * as React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'native-base';
//////////////Parametros de Navegação/////////////////////////////////////////////////////
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'BottonsIcon'
>;
///////////////////////////////////////////////////////////////////////////////
interface Props {
  icon: string;
}
const BottonsIcon = () => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.Icon}>
        <View>
          <Icon name="list-alt" size={30} color="#FFF" />
        </View>
      </TouchableOpacity >
      <TouchableOpacity 
       onPress={() => navigation.navigate('DashboardPanel')} 

      style={styles.Icon}>
        <View>
          <Icon name="home" size={30} color="#FFF" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Effective')}
        style={[styles.Icon]}>
        <View style={styles.TouchableOpacity}>
          <Icon name="address-book" size={25} color="#FFF" />
          <Text p={1} color="#FFF" fontSize="xs">
            Pessoas
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default BottonsIcon;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
  },
  Icon: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',

    borderRadius: 3,
    width: 110,
    height: 100,
  },
  TouchableOpacity: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderColor: '#FFFFFF',
    borderWidth: 1.3,
    borderRadius: 5,
  },
});
