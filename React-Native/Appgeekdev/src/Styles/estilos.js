import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto1: {
    color: '#00ff00',
    fontSize: 10,
  },
  slogan: {
    color: '#ggg',
    fontSize: 30,
  },
  logo: {
    width: 305,
    height: 180,
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '@3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText: {
    fontSize: 16,
    backgroundColor: 'blue',
    fontWeight: 'bold',
    color: '#000',
  },
});
export default styles;
