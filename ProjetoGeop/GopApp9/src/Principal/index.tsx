import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamsList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Center, VStack, Heading, StatusBar} from 'native-base';
import BottonsIcon from './BottonsIcon';
import {Modal, Portal, Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

type homeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;

export default function Principal() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, height: 400};
  return (
    <SafeAreaView style={{flex: 1, width: '100%'}}>
      <StatusBar backgroundColor="#0369a1" barStyle="light-content" />
      <Center p={4} flex={1} px={3} bg="info.700">
        <VStack space={2}>
          <Center w="340" flex={0.25} justifyContent="flex-end">
            <Heading textAlign="center" mb="10" color="white">
              Vila Guilherme
            </Heading>
            <Portal>
              <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={containerStyle}>
                <Text>Example Modal. Click outside this area to dismiss.</Text>
              </Modal>
            </Portal>
            <TouchableOpacity
              onPress={showModal}
              style={{
                marginTop: 1,
                position: 'absolute',
              }}>
              <Icon name="down" size={13} color="white" />
            </TouchableOpacity>
          </Center>
          <Center w="340" flex={0.55} />
          <Center flex={0.18} justifyContent="center" alignItems="center">
            <BottonsIcon />
          </Center>
        </VStack>
      </Center>
    </SafeAreaView>
  );
}
