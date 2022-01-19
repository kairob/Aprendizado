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
 
 async function handleEdit(id: string) {
   const [name, setName] = useState('');
   const [matricula, setMatricula] = useState('');
   const [data, setData] = useState('');
   const PushDataInput = (id: string) => {
     setName(item.name);
    

     setMatricula(item.matricula);

     console.log(PushDataInput);
   };
 
   const ToUpdate = await firestore().collection('Employee').doc(id)
     const dados={
       name: name,
       matricula: matricula
     }
    ToUpdate.update({dados})
     console.log(dados);
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
          <TouchableOpacity onPress={() => handleEdit(item.id)}>
            <Icon name="edit" size={23} color="black" />
          </TouchableOpacity>
          {item.isDone ? (
            <CheckCircleIcon
              size={2}
              color="#03BB85"
              onPress={() => handleToggleDone(item.id)}
            />
          ) : (
            <WarningIcon
              size={2}
              color="#FF6961"
              onPress={() => handleTogglePending(item.id)}
            />
          )}
        </Box>
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

export default TodoItemList;
