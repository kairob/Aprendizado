import React, {useEffect, useState} from 'react';
import {VStack, FlatList, Box, Spacer} from 'native-base';
import firestore from '@react-native-firebase/firestore';

import DetailsEffective from './DetailsEffective';
import {IItem} from './Types';
import NewEffective from './NewEffective';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Employee')
      .onSnapshot(snapshot => {
        const todoList: IItem[] = [] as IItem[];
        snapshot.forEach(documentSnapshot => {
          const data = documentSnapshot.data();
          const todoItem: IItem = {
            id: documentSnapshot.id,
            name: data.name,
            isDone: data.isDone,
            matricula: data.matricula,
            title: data.title,
          };
          todoList.push(todoItem);
        });

        setTodos(todoList);
      });

    return () => subscriber();
  }, []);

  return (
    <VStack space={1} alignItems="center" mt={3}>
      <NewEffective  />
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
    </VStack>
  );
};

export default Home;
