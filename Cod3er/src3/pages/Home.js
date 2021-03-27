import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import styles from '../pages/Styles';
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
function login() {
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

      <TouchableOpacity style={styles.botao} onPress={() => Entrar()}>
        <Text style={styles.botaotext}>login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Home({navigation}) {
  //const goNextPage = () => navigation.navigate('home');

  return (
    <View style={styles.HomeView}>
      <Text>Feed Screen</Text>
      <TouchableOpacity>
        <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
        <Button title="Entrar" onPress={() => login()} />
      </TouchableOpacity>
    </View>
  );
}
