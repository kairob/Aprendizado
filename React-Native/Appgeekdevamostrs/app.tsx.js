import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import styles from './src/Styles/estilos'

export default class App extends Component {
  clicou = () => {
    Alert.alert = ('pagina', 'voce clicou');
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/wolf.jpg')} style={styles.logo} />
        <TextInput style={styles.input} placeholder="Digite seu email" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            this.clicou();
          }}>
          <Text style={styles.botaoText}> login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  input: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
    width: 300,
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaotext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
