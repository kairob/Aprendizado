import React, {useState} from 'react';
import {Heading, Spacer, HStack, Button} from 'native-base';
import { TextInput } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const NewEffective = () => {
  const [newMatricula, setNewMatricula] = useState('');
  const [newname, setNewname] = useState('');

  
  const handleAddItem = () => {
    const newData = {
      name: newname,
      matricula: newMatricula,
    
      
    };

    firestore().collection('todos').add(newData);
    setNewname('');
    setNewMatricula('');

  };
 
  return (
    <>
      
      <HStack bg="luz.50">
        <TextInput
        
        style={{ width:250}}
          label ="nome"
          value={newname}
          onChangeText={setNewname}
        />
        <TextInput
        style={{ width:100}}
          label="matricula"
          value={newMatricula}
          onChangeText={setNewMatricula}
        
        />
        
      </HStack>
      <Button mx={2} onPress={handleAddItem}>
          Salvar
        </Button>
      <Spacer />
    </>
  );
};

export default NewEffective;
