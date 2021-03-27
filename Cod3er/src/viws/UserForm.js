import React, { useState, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
export default ({ route, navigation }) => {
  const [ user, setUser] = useState(route.parans ? route.parans : {})
    
  return (
    <View style={style.form}>
      <Text>Name</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o Nome"
        value = {user.name}
      />
      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={email => setUser({...user, email})}
        placeholder="Informe seu E-mail"
        value = {user.email}
      />
      <Text>Avatar</Text>
      <TextInput
        style={style.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder="Informe o AvararUrl"
        value = {user.avatarUrl}
      />
      <Button
        title="Salvar"
        onPress={() => navigation.goBack()}
      />  

        
    
    </View>
    
  )    
}
const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: '#6c8eff',
    marginBottom: 10,
  },
});