import React, {useEffect, useState} from 'react';
import {Heading, Input, Spacer, HStack, Button} from 'native-base';
import firestore from '@react-native-firebase/firestore';

const NewEffective = (props) => {
const initialValues = {
  name: '',
  matricula:''
}
const [EditName, setEditName] = useState('')
const [EditMatricula, setEditMatricula] = useState('');

const [EditData, setEditData] = useState(initialValues);

const [atualizacion, setAtualizacion] = useState(false)

async function getEditData(){
  if(props.idAtual === ''){
    setEditData({...initialValues})
  }else{
    setEditData({...props.DataEmployee[props.idAtual]})
  }
}
 useEffect(() => {getEditData},[props.idAtual,props.DataEmployee])


  /////////////////////
  const [newName, setNewName] = useState('');
   const [newMatricula, setNewMatricula] = useState('');
  
  

  const handleAddItem = () => {
    const Editdata ={
      name : EditName,
      matricula:EditMatricula

    }
    const newData = {
      name: newName,
      isDone: false,
      createdAt: new Date(),
      matricula: newMatricula
    };

    firestore().collection('Employee').doc().set(newData || [Editdata]);
    setNewName('');
    setNewMatricula('');
  };
 
  return (
    <>
      <HStack display="flex">
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
        {atualizacion ? (
          <Button mx={1} >
            Edit
          </Button>
        ) : (
          <Button mx={1} onPress={handleAddItem}>
            Salvar
          </Button>
        )}
      </HStack>
      <Spacer />
    </>
  );
};

export default NewEffective;
