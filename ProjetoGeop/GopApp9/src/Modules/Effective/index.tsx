import React, {useState, useEffect} from 'react';
import {IItem} from './Types';
import { SafeAreaView } from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/AntDesign';
import { FAB,Appbar} from 'react-native-paper';
import {Box, VStack, Spacer, HStack, Button, Input} from 'native-base';
import { 
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  
  Text,
  Pressable,
  View,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import styles from './styles'
import FabGroup from './FabGroup'
//////////////Parametros de Navegação/////////////////////////////////////////////////////
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Effective'
>;
///////////////////////////////////////////////////////////////////////////////
const Effective = () => {
  const navigation = useNavigation<homeScreenProp>();

  ////////////EditItem///////////////////////////////////////////////////////////////////////////
  const [EditName, setEditName] = useState('');
  const [EditMatricula, setEditMatricula] = useState('');
  const [DataEmployee, setDataEmployee] = useState([]);
  const [idAtual, setIdAtual] = useState('');

  async function EditData(idAtual) {
    await firestore().collection('Employee').doc(idAtual).update({
      name: EditName,
      matricula: EditMatricula,
    });
  }
  function OpenModal(id: string) {
    setModalVisible(true);
    DataEmployee.forEach(item => {
      if (id === item.id) {
        setIdAtual(item.id);
        setEditName(item.name);
        setEditMatricula(item.matricula);
      }
    });
  }
    ////////////////GetItem//////////////////////////////////////////////////////////////////////

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
 

  const renderItem = ({item}) => (
    <ListItem bottomDivider hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}>
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

                    <Button
                      mx={1}
                      onPress={() => {
                        EditData(idAtual);
                      }}>
                      Edit
                    </Button>
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
          <TouchableOpacity
            onPress={() => {
              OpenModal(item.id);
            }}>
            <Icon name="edit" size={23} color="black" />
          </TouchableOpacity>
        </Pressable>
      </View>
    </ListItem>
  );

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView>
        <Box bg="info.800">
          <Appbar.Header style={{backgroundColor: '#0369a1', width: '100%'}}>
            <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
            <Appbar.Content title="Lista de Empregados" />
          </Appbar.Header>
        </Box>

        <VStack
          style={{backgroundColor: 'white'}}
          alignItems="center"
          mt={1}>
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
      </SafeAreaView>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('NewEffective')}
      />
    </>
  );
};
export default Effective;

