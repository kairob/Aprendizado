import React, {useState} from 'react';
import {Heading, Input, Spacer, HStack, Button} from 'native-base';
import firestore from '@react-native-firebase/firestore';

const NewEffective = () => {
  const [newName, setNewName] = useState('');
   const [newMatricula, setNewMatricula] = useState('');

  const handleAddItem = () => {
    const newData = {
      name: newName,
      isDone: false,
      createdAt: new Date(),
      matricula: newMatricula
    };

    firestore().collection('Employee').add(newData);
    setNewName('');
    setNewMatricula('');
  };
 const [name, setName] = useState('');
 const [matricula, setMatricula] = useState('');
 const [data, setData] = useState('');
 const PushDataInput = (id: string) => {
   setNome(data.name)
     item.name;
   
   setMatricula:
     item.matricula;
   
   console.log(PushDataInput);
 };
  return (
    <>
      <HStack display="flex" >
        <Input
          color="#000000"
         
          w={{
            base: '60%',
            md: '80%',
          }}
          value={newName}
          onChangeText={setNewName}
        />
        <Input
          color="#000000"
         
          w={{
            base: '20%',
            md: '80%',
          }}
          value={newMatricula}
          onChangeText={setNewMatricula}
        />
        <Button onPress={PushDataInput()}>Atualizar</Button>
        <Button mx={1} onPress={handleAddItem}>
          Salvar
        </Button>
      </HStack>
      <Spacer />
    </>
  );
};

export default NewEffective;
