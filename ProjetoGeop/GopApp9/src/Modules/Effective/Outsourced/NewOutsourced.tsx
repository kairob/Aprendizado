import React from 'react';
import {VStack, FormControl, Box, HStack} from 'native-base';
import {Button, Appbar, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
//////////////Parametros de Navegação/////////////////////////////////////////////////////
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Effective'
>;
///////////////////////////////////////////////////////////////////////////////
const NewEffective = () => {
  const navigation = useNavigation<homeScreenProp>();
  interface ForData {
    name: string;
    matricula: string;
    placa: string;
  }
  const initialValues = {
    name: '',
    matricula: '',
    placa: '',
  };
  const [formData, setData] = React.useState<ForData>(initialValues);
  const [errors, setErrors] = React.useState({});
  const validate = () => {
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
  const Return = () => {
    return navigation.navigate('OutsourcedEmployee');
  };
  const handleAddItem = () => {
    const newData = {
      name: formData.name,
      placa: formData.placa,
      createdAt: new Date(),
      matricula: formData.matricula,
    };

    firestore().collection('Outsourced').doc().set(newData);
    Return();
  };
  const onSubmit = () => {
    validate() ? handleAddItem() : console.log('Validation Failed');
  };
  return (
    <>
      <SafeAreaView>
        <Box bg="info.800">
          <Appbar.Header
            style={{
              backgroundColor: '#0369a1',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Appbar.BackAction
              onPress={() => navigation.navigate('OutsourcedEmployee')}
            />
            <Appbar.Content
              title="Cadastro de Empregados"
              subtitle="Parceiros"
            />
          </Appbar.Header>
        </Box>
        <HStack
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <VStack  mx="3" >
            <FormControl isRequired isInvalid={'name' in errors}>
              <TextInput
                mode="outlined"
                label="Nome"
                onChangeText={value => setData({...formData, name: value})}
              />
              {'name' in errors ? (
                <FormControl.ErrorMessage>
                  Inserir Nome
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText>
                  O nome deve conter pelo menos 3 caracteres.
                </FormControl.HelperText>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={'matricula' in errors}>
              <TextInput
                mode="outlined"
                label="Matricula"
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
            <FormControl isRequired isInvalid={'placa' in errors}>
              <TextInput
                mode="outlined"
                label="Placa"
                onChangeText={value => setData({...formData, placa: value})}
              />
              {'placa' in errors ? (
                <FormControl.ErrorMessage>
                  Inserir placa
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText>
                  A placa deve conter 7 caracteres.
                </FormControl.HelperText>
              )}
            </FormControl>
            <Button
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={onSubmit}>
              Salvar
            </Button>
          </VStack>
        </HStack>
      </SafeAreaView>
    </>
  );
};

export default NewEffective;
