import React from 'react';
import {IItem} from './Types';
import firestore from '@react-native-firebase/firestore';

import {
  HStack,
  Text,
  Box,
  CloseIcon,
} from 'native-base';

const DetailsEffectiveList = ({item}: {item: IItem}) => {
  async function handleRemove(id: string) {
    await firestore().collection('todos').doc(id).delete();
  }

  async function handleToggleDone(id: string) {
    await firestore().collection('todos').doc(id).update({
      isDone: false,
    });
  }

  async function handleTogglePending(id: string) {
    await firestore().collection('todos').doc(id).update({
      isDone: true,
    });
  }

  return (
    <Box borderBottomWidth="1" pl="4" pr="5" py="2">
      <HStack space={3} justifyContent="flex-start" alignItems="center">
        <Box>
          
        </Box>
        <Text
          _dark={{
            color: 'primary.800',
          }}
          flex={1}
          color="red.800"
          bold>
          {item.name}
        </Text>
        <Text
          _dark={{
            color: 'primary.800',
          }}
          flex={1}
          color="red.800"
          bold>
          {item.matricula}
        </Text>
        <Box>
          <CloseIcon
            size={3}
            color="#ff0000"
            onPress={() => handleRemove(item.id)}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default DetailsEffectiveList
