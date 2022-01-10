import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import {VStack, FlatList, Box, Spacer, Heading, Center} from 'native-base';
import firestore from '@react-native-firebase/firestore';
import NewEffective from './NewEffective'
import DetailsEffective from './DetailsEffective';
import {IItem} from './Types';

const Effective: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('todos')
      .onSnapshot(snapshot => {
        const todoList: IItem[] = [] as IItem[];
        snapshot.forEach(documentSnapshot => {
          const data = documentSnapshot.data();
          const todoItem: IItem = {
            id: documentSnapshot.id,            
            matricula:data.matricula,
            name: data.name,
            
            
          };
          todoList.push(todoItem);
        });

        setTodos(todoList);
      });

    return () => subscriber();
  }, []); 
  
  
  return (
    <VStack bg="luz.50" space={1} alignItems="center" mt={3}>
      
        <NewEffective />
      
      <Spacer />
      <Box
        pt={12}
        w={{
          base: '100%',
          md: '25%',
        }}>
        <FlatList
          data={todos}
          renderItem={({item}) => <DetailsEffective item={item} />}
          keyExtractor={item => item.id}
        />
      </Box>
      <Spacer />
    </VStack>
  );
};

export default Effective;
