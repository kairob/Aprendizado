import React, {useState,useEffect} from 'react';
import {IItem} from './Types';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  HStack,
  Text,
  CheckCircleIcon,
  WarningIcon,
  CloseIcon,
  Box,
  Container,
  VStack,
  Spacer,
  Input,
  Button
} from 'native-base';
import {TouchableOpacity, FlatList, View} from 'react-native';
import { ListItem } from 'react-native-elements'

 const Effective = () => {
////////////EditItem///////////////////////////////////////////////////////////////////////////
{/*const [name, setName] = useState('');
const [Matricula, setMatricula] = useState('');
const [EditData, setEditData] = useState([])

[/*const handleEdit= (EditData,id: string) => {
  setName(EditData.name)
  setMatricula(EditData.matricula)

}
async function handleEditItem(id: string) {
  handleEdit()
  const EditFirebase = await firestore().collection('Employee').doc(id);
  const dados = {
    name:newName,
  ]  matricula:newMatricula
  }
  EditFirebase.update({dados})
}
*/}
////////////////SetItem//////////////////////////////////////////////////////////////////////
const [newName, setNewName] = useState('')
const [newMatricula, setNewMatricula] = useState('')
console.log(newName,newMatricula)
async function HandleSetItem () {
const Add= await firestore().collection('Employee').doc()
const data = {
  name: newName,
  matricula: newMatricula
}
    Add.set(data)

    setNewMatricula('')
    setNewName('')
}
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
const renderItem = ({ item }) => {
   //console.log(item);
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.matricula}</ListItem.Subtitle>
      </ListItem.Content>
      <View>
        <TouchableOpacity >
          <Icon name="edit" size={23} color="black" />
        </TouchableOpacity>
      </View>
    </ListItem>
  );
}

  return (
    <>
      <VStack space={1} alignItems="center" mt={1}>
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
          <Button mx={1}>
            Salvar
          </Button>
          <Button mx={1} onPress={HandleSetItem()}>
            Salvar
          </Button>
        </HStack>
        <Spacer />
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

 }
export default Effective