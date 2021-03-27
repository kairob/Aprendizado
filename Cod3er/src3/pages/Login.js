import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import styles from './Styles';
//import HomeScreen from '../HomeScreen'

export default function LoginScreen({navigation}) {
  const goNextPage = () => navigation.navigate('home');
  function Entrar() {
    Alert.alert(
      'Excluir Usuário',
      'Deseja fazer Login ?',

      [
        {
          text: 'Cancel',

          style: 'cancel',
        },
        {text: 'Sim'},
      ],
      {cancelable: false},
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2013/07/12/19/25/github-154769__340.png',
        }}
      />
      <TextInput style={styles.input} placeholder="Digite seu E-mail" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua Snha"
      />

      <TouchableOpacity style={styles.botao} onPress={() => goNextPage()}>
        <Text style={styles.botaotext}>login</Text>
      </TouchableOpacity>
    </View>
  );
}
