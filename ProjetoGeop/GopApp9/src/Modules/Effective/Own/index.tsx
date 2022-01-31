import React, {useState, useEffect} from 'react';
import {IItem} from '../Types';
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
  StyleSheet
} from 'react-native';
import {ListItem} from 'react-native-elements';
import styles from '../styles'
import FabGroup from '../FabGroup'
//////////////Parametros de Navegação/////////////////////////////////////////////////////
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Effective'
>;
///////////////////////////////////////////////////////////////////////////////
const Effective = () => {
  const navigation = useNavigation<homeScreenProp>();
  ////////////////Detatlhes Efetivo//////////////////////////////////////////////////////////////
  
  ////////////EditItem///////////////////////////////////////////////////////////////////////////
  const [EditName, setEditName] = useState('');
  const [EditMatricula, setEditMatricula] = useState('');
  const [DataEmployee, setDataEmployee] = useState([]);
  const [idAtual, setIdAtual] = useState('');
  ////////////////GetItem//////////////////////////////////////////////////////////////////////
  const CloseModal = () => {
    setModalVisible(!modalVisible);
  };
  async function EditData(idAtual) {
    await firestore().collection('Employee').doc(idAtual).update({
      name: EditName,
      matricula: EditMatricula,
    });
    CloseModal();
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

  const renderItem = ({item}) => (
    <TouchableOpacity>
      <ListItem
        bottomDivider
        hasTVPreferredFocus={undefined}
        tvParallaxProperties={undefined}>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.matricula}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>
          <ListItem.Title right style={{color: 'green'}}>
            11:00 am
          </ListItem.Title>
          <ListItem.Subtitle right>
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
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" size={15} color="white" />
                    </Pressable>
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
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
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
        <Spacer bg="light.50" />
        <VStack style={{backgroundColor: 'white'}} alignItems="center" mt={1}>
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
    {/*  <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('NewEffective')}
    />*/}
      <FabGroup style={{bottom:80,right:80}} />
    </>
  );
};
export default Effective;

