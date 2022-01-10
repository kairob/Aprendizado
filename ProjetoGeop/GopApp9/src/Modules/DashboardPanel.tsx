import * as React from 'react';
import {Center, Container, Text} from 'native-base';
//////////////Parametros de Navegação/////////////////////////////////////////////////////
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'DashboardPanel'
>;
///////////////////////////////////////////////////////////////////////////////

const DashboardPanel: React.FC = () => {
  return (
    <Container flex={1}>
      <Center>
        <Text>Painel de Bordo</Text>
      </Center>
    </Container>
  );
};
export default DashboardPanel;
