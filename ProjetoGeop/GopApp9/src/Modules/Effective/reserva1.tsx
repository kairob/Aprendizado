import React, {useState, useEffect} from 'react';
import {IItem} from './Types';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/AntDesign';
import {Box, VStack, Spacer} from 'native-base';
import {FlatList} from 'react-native';

import NewEffective from './NewEffective';
import DetailsEffective from './DetailsEffective';

const Effective = () => {
  ////////////EditItem///////////////////////////////////////////////////////////////////////////

  ////////////////SetItem//////////////////////////////////////////////////////////////////////
  const [DataEmployee, setDataEmployee] = useState<IItem[]>([]);
    const [idAtual, setIdAtual] = useState('');

  useEffect(() => {
    const Editdata = firestore()
      .collection('Employee')
      .onSnapshot(snapshot => {
        const EditList: IItem[] = [] as IItem[];
        snapshot.forEach(documentSnapshot => {
          const data = documentSnapshot.data();
          const todoItem: IItem = {
            id: documentSnapshot.id,
            idAtual: documentSnapshot.id,
            name: data.name,
            isDone: data.isDone,
            matricula: data.matricula,
            title: data.title,
          };
          EditList.push(todoItem);
          console.log(EditList);
        });
        setDataEmployee(EditList);
      });

    return () => Editdata();
  }, []);
  //////////////////Lista//////////////////////////////////////////////////////////////////////
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
            idAtual: documentSnapshot.id,
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
    <>
      <VStack position="relative" space={1} alignItems="center" mt={1}>
        <NewEffective  {...({DataEmployee })}/>
        <Spacer />
        <Box
          pt={1}
          w={{
            base: '100%',
            md: '25%',
          }}>
          <FlatList
            data={todos}
            renderItem={({item}) => <DetailsEffective {...({item, idAtual})} />}
            keyExtractor={item => item.id}
          />
        </Box>
      </VStack>
    </>
  );
};
export default Effective;
