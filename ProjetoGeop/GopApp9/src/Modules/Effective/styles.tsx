import { position } from 'native-base/lib/typescript/theme/styled-system';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  FABcontainer: {
    alignItems: 'flex-end',

    position: 'absolute',

    paddingVertical: 5,
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    margin: 16,

    borderRadius: 50 / 2,
    shadowRadius: 10,
    shadowColor: '#002138',
    shadowOpacity: 0.3,
    ShadowOffset: {
      height: 10,
    },
  },
  fabMenu: {
    backgroundColor: '#0369a1',
  },
  fabSubMenu: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#0369a1',
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',

    marginTop: 5,
  },
  modalView: {
    margin: 10,
    height: 350,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    borderRadius: 20,

    elevation: 2,
    right: 15,
    bottom: 15,

    marginLeft: 305,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default styles