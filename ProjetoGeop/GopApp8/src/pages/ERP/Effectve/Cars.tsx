import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import {VStack, FlatList, Box, Spacer, Heading} from 'native-base';
import firestore from '@react-native-firebase/firestore';
import NewEffective from './NewEffective'
import DetailsCars from './DetailsCars';
import {IItem} from './Types';
import Formularios from '../../../Formick/Main';

const Effective: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('todos')
      .onSnapshot(snapshot => {
        const CarsList: IItem[] = [] as IItem[];
        snapshot.forEach(documentSnapshot => {
          const data = documentSnapshot.data();
          const CarItem: IItem = {
            id: documentSnapshot.id,            
            modelo:data.modelo,
            placa: data.placa,
            name: data.name,
            matricula: data.matricula,
            
          };
          CarsList.push(CarItem);
        });

        setTodos(CarsList);
      });

    return () => subscriber();
  }, []); 
  
  
  return (
    
    <VStack  bg="luz.50" space={1} alignItems="center" mt={3}>
          <Formularios />
      <Spacer />
      <Box
      
        pt={12}
        w={{
          base: '100%',
          md: '25%',
        }}>
        <FlatList
          data={todos}
          renderItem={({item}) => <DetailsCars item={item}  />}
          keyExtractor={item => item.id}
        />
      </Box>
      <Spacer />      
      
 
    </VStack>
    
  );
};

export default Effective;
