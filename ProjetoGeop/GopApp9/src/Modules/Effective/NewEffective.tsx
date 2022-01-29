import React, {useEffect,useState}from 'react';
import { Input, VStack,FormControl, Box} from 'native-base';
import {Button, Appbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackHandler, Alert} from 'react-native';





import firestore from '@react-native-firebase/firestore';
//////////////Parametros de Navegação/////////////////////////////////////////////////////
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Effective'
>;
///////////////////////////////////////////////////////////////////////////////

const NewEffective  = () => {
   const navigation = useNavigation<homeScreenProp>();
  interface ForData  {
    name: string;
    matricula: string;
  }
  const initialValues = {
name: '',
matricula: ''
  }
  const [formData, setData] = useState<ForData>(initialValues);
  const [errors, setErrors] = useState({});

  const validate  = () => {
    if (formData.name === undefined) {
      setErrors({...errors, name: 'Nome é obrigatório'});
      return false;
    } else if (formData.name.length < 3) {
      setErrors({...errors, name: 'Nome é muito curto'});
      return false;
    }
    if (formData.matricula === undefined) {
      setErrors({...errors, matricula: 'Matricula é obrigatoria'});
      return false;
    } else if (formData.matricula.length < 9) {
      setErrors({...errors, matricula: 'Matricula é muito curta'});
      return false;
    }

    return true;
  };

const handleAddItem = () => {
  const newData = {
    name: formData.name,
    isDone: false,
    createdAt: new Date(),
    matricula: formData.matricula,
  };

  firestore().collection('Employee').doc().set(newData);
 setData(initialValues)
 
};
  const onSubmit = () => {
    validate() ? handleAddItem() : console.log('Validation Failed');
  };
const BackButton = () => {
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
};

  return (
    <>
      <SafeAreaView>
        <Box bg="info.800">
          <Appbar.Header style={{backgroundColor: '#0369a1', width: '100%'}}>
            <Appbar.BackAction
              onPress={() => navigation.navigate('Effective')}
            />
            <Appbar.Content title="Cadastro de Empregados" />
          </Appbar.Header>
        </Box>
        <VStack position="relative" p={10} mx="3" maxW="300px">
          <FormControl isRequired isInvalid={'name' in errors}>
            <Input
              width="300"
              placeholder="Name*"
              onChangeText={value => setData({...formData, name: value})}
            />
            {'name' in errors ? (
              <FormControl.ErrorMessage>Inserir Nome</FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                O nome deve conter pelo menos 3 caracteres.
              </FormControl.HelperText>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={'matricula' in errors}>
            <Input
              width="300"
              placeholder="Matricula*"
              onChangeText={value => setData({...formData, matricula: value})}
            />
            {'matricula' in errors ? (
              <FormControl.ErrorMessage>
                Inserir matricula
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                A matricula deve conter 10 caracteres.
              </FormControl.HelperText>
            )}
          </FormControl>

          <Button onPress={onSubmit}>Salvar</Button>
        </VStack>
      </SafeAreaView>
      
    </>
  );
}

export default NewEffective
