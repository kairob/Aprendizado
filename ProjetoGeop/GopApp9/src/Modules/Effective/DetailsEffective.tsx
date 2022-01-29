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


const DetailsEffective = ({item}: {item: IItem}) => {
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
     </Box>
  );
};

export default DetailsEffective;
