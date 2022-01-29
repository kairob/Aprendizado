import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 15,
    bottom: 15,
    backgroundColor: '#0369a1',
  },
  centeredView: {
    flex: 1,
    alignItems: 'flex-end',

    marginTop: 5,
    marginLeft: 100,
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
    padding: 10,
    elevation: 2,
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