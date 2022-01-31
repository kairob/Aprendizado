import { position } from 'native-base/lib/typescript/theme/styled-system';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FAB} from 'react-native-elements';
import styles from './styles';
//////////////Parametros de Navegação/////////////////////////////////////////////////////
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'FabGroup'
>;
///////////////////////////////////////////////////////////////////////////////

const FabGroup =(props) => {

  const [visible, setVisible] = React.useState(false);
  const navigation = useNavigation<homeScreenProp>();
  const ClosedFab = () =>{
    setVisible(!visible);
  }

  return (
    <>
      <View style={[styles.FABcontainer, props.style]}>
        <TouchableOpacity>
          <FAB
            visible={visible}
            icon={{name: 'add', color: 'white'}}
            color="green"
            style={{padding: 2}}
            onPress={() => navigation.navigate('NewEffective')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FAB
            visible={visible}
            style={{padding: 2}}
            icon={{name: 'add', color: 'white'}}
            title="Terceiros"
            onPress={() => navigation.navigate('OutsourcedEmployee')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FAB
            visible={visible}
            onPress={() => setVisible(!visible)}
            style={{position: 'absolute'}}
            icon={{name: 'delete', color: 'white'}}
            color="red"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FAB
            visible={!visible}
            onPress={() => setVisible(!visible)}
            style={{position: 'absolute'}}
            icon={{name: 'add', color: 'white'}}
            color="#0369a1"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default FabGroup