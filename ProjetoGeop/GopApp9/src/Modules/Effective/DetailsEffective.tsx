import React, { useState} from 'react';
import {IItem} from './Types';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  HStack,
  Text,
  Box,
  CheckCircleIcon,
  WarningIcon,
  CloseIcon,
} from 'native-base';
import { TouchableOpacity } from 'react-native';


const TodoItemList = ({item}: {item: IItem}) => {
  const [atualizacion, setAtualizacion] = useState(false);
  const SetEditItem = (id: string) =>{
     setAtualizacion(true)
   }

 
  
    async function handleRemove(id: string) {
      await firestore().collection('Employee').doc(id).delete();
    }

  async function handleToggleDone(id: string) {
    await firestore().collection('Employee').doc(id).update({
      isDone: false,
    });
  }

  async function handleTogglePending(id: string) {
    await firestore().collection('Employee').doc(id).update({
      isDone: false,
    });
  }

  return (
    <Box borderBottomWidth="1" pl="4" pr="5" py="2">
      <HStack space={3} justifyContent="flex-start" alignItems="center">
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
          <TouchableOpacity onPress={() => SetEditItem(item.id)}>
            <Icon name="edit" size={23} color="black" />
          </TouchableOpacity>
          
        </Box>
        <Box>
          <CloseIcon
            size={3}
            color="#ff0000"
            onPress={() => handleRemove(item.id )}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default TodoItemList;
