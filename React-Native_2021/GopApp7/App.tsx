import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
function App() {
  return (
    <View style={style.container}>
      <Text>texto para leitura</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: 'cornflowerblue',
  },
});
export default App;
