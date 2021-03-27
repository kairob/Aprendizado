import React, { useState, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import UsersContext from '../context/UsersContext'
export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const {dispatch}= useContext(UsersContext)
  return (
    <View style={style.form}>
      <Text>nome</Text>
      <TextInput
        style={style.input}
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informe o Nome"
        value={user.name}
      />
      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Informe o seu E-mail"
        value={user.email}
      />
      <Text>avatarUrl</Text>
      <TextInput
        style={style.input}
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        placeholder="Informe o seu Avatar Url"
        value={user.avatarUrl}
      />
      <Button
        title="Salvar"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    bordewidht: 1,
    marginBotton: 10,
  },
});
