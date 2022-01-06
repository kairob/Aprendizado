import React from 'react';

import { Alert, Keyboard, StatusBar } from 'react-native';

import { Formik } from 'formik';

import * as Yup from 'yup';

import {
  Container,
  Form,
  Label,
  Input,
  Error,
  Title,
  SubmitButton,
  SubmitButtonText,
} from './styles';
////////////////////////////////////////////////////////////////////////////////////////////
//Parametros de navegação
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'ActivitySchedule'
>;
///////////////////////////////////////////////////////////////////////////////////////////

const SignupConfig = Yup.object().shape({
  name: Yup.string()
    .min(
      5,
      'Nome muito curto, tem certeza de que colocou seu nome e sobrenome?'
    )
    .max(50, 'Nome muito grande')
    .required('Por favor,preencha o campo com seu nome e sobrenome'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Por favor,informe o e-mail'),
  password: Yup.string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .required('Por favor,informe sua senha'),
});


export default function Formularios() {

  return (
    <Formik
      initialValues={{ modelo: '', placa: '', name: '' }}
      validationSchema={SignupConfig}
      onSubmit={values => {
        Keyboard.dismiss();
        Alert.alert(`Dados inseridos: ${values}`);
      }}
    >
      {({ values, handleSubmit, handleChange, errors }) => (
        <Container>
          <StatusBar barStyle="light-content" backgroundColor="#0f198c" />
          <Form>
            <Title>Veiculos</Title>

            <Label>Modelo</Label>
            <Input
              value={values.modelo}
              onChangeText={handleChange('modelo')}
              autoCapitalize="none"
              autoCorrect={false}             
              returnKeyType="next"
              onSubmitEditing={() => this.email.focus()}
            />

            <Error>{errors.modelo}</Error>

            <Label>Placa</Label>
            <Input
              value={values.placa}
              onChangeText={handleChange('placa')}
              autoCapitalize="none"
              autoCorrect={false}              
              returnKeyType="next"             
              onSubmitEditing={() => this.password.focus()}
            />

            <Error>{errors.placa}</Error>

         { /*  <Label>Senha</Label>
            <Input
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="senha secreta"
              returnKeyType="send"
              
            />

         <Error>{errors.password}</Error>*/}

            <SubmitButton onPress={handleSubmit}>
              <SubmitButtonText>Continuar</SubmitButtonText>
            </SubmitButton>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
