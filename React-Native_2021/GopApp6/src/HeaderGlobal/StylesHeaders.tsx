/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const StylesHeaders = StyleSheet.create({
  ContainerHeader: {
    flexDirection: 'row',
    flex: 1,
  },
  BoxGroupHeadersLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

    flex: 0.2,
  },
  BoxGroupHeadersCenter: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center',

    flex: 0.6,
  },
  BoxGroupHeadersRight: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

    flex: 0.2,
  },
  BoxHome: {
    alignItems: 'center',
    alignContent: 'center',
  },

  ////////Home////////
  ContainerHeaderHome: {
    backgroundColor: 'cornflowerblue',
  },

  //////Modules////////////////
  ContainerHeaderModules: {
    backgroundColor: 'white',
  },
  ///////SmartPhones////
  ContainerHeaderSmartPhones: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
  },
  ///////Cars////
  ContainerHeaderCars: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
  },
});

export default StylesHeaders;
