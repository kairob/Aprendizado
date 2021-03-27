import React , { useState} from 'react'
import { TextInput, View ,Text} from 'react-native'
//import styles from '../estilos'
export default props => {
  const [ nome, setNome] =useState ('Teste')
  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
      />
        
    </View>
  )
}
