import React, {useState, useEffect} from 'react';
import {IItem} from './Types';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/AntDesign';
import {Dialog, Portal} from 'react-native-paper';
import {Box, VStack, Spacer,HStack, Button,Input} from 'native-base';
import {
  FlatList,
  TouchableOpacity,

  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import {ListItem} from 'react-native-elements';

import NewEffective from './NewEffective';
import DetailsEffective from './DetailsEffective';

const Effective = () => {
  ////////////EditItem///////////////////////////////////////////////////////////////////////////
function OpenModal(id : string) {
  setModalVisible(true);
   DataEmployee.forEach(item => {
     if (id === item.id) {
       setEditName(item.name);
      setEditMatricula(item.matricula) 
      }
   });
}
  ////////////////GetItem//////////////////////////////////////////////////////////////////////
  const [EditName, setEditName] = useState('')
  const [EditMatricula, setEditMatricula] = useState('')
  const [DataEmployee, setDataEmployee] = useState([]);
  const [idAtual, setIdAtual] = useState('');
   function EditData(id: string) {
     OpenModal(id)
     
       
   }


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
  
  /////////////////////
  const [newName, setNewName] = useState('');
  const [newMatricula, setNewMatricula] = useState('');
const [atualizacion, setAtualizacion] = useState(false);
  const handleAddItem = () => {
    
    const newData = {
      name: newName,
      isDone: false,
      createdAt: new Date(),
      matricula: newMatricula,
    };

    firestore()
      .collection('Employee')
      .doc()
      .set(newData );
    setNewName('');
    setNewMatricula('');
  };
 
  const renderItem = ({item}) => (
    <ListItem     
      hasTVPreferredFocus={undefined}
      tvParallaxProperties={undefined}>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.matricula}</ListItem.Subtitle>
      </ListItem.Content>

      <View style={styles.centeredView}>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <VStack>
                <Box p={3}>
                  <HStack display="flex">
                    <Input
                      color="#000000"
                      w={{
                        base: '60%',
                        md: '80%',
                      }}
                      value={EditName}
                      onChangeText={setEditName}
                    />

                    <Input
                      color="#000000"
                      w={{
                        base: '20%',
                        md: '80%',
                      }}
                      value={EditMatricula}
                      onChangeText={setEditMatricula}
                    />
                    
                      <Button mx={1} onPress={()=>{EditData}}>Edit</Button>
                    
                    
                  </HStack>
                </Box>
              </VStack>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable>
          <TouchableOpacity onPress={() =>{OpenModal(item.id)}}>
            <Icon name="edit" size={23} color="black" />
          </TouchableOpacity>
        </Pressable>
      </View>
    </ListItem>
  );
  
   const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <VStack  space={1} alignItems="center" mt={1}>
        <Spacer />
       
        <Box   p={3}>            
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
              <Button mx={1}>Edit</Button>
            ) : (
              <Button mx={1} onPress={handleAddItem}>
                Salvar
              </Button>
            )}
          </HStack>
        </Box>
        
        <Box
          pt={1}
          w={{
            base: '100%',
            md: '25%',
          }}>
          <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </Box>
      </VStack>
    </>
  );
};
export default Effective;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalView: {
    margin: 10,
    height:550,
    width:350,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});