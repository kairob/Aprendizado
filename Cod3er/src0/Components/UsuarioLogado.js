import React from 'react'
import { Text } from 'react-native'
import styles from './estilos'
import If from './If'

export default props => {
  const usuario = props.usuario || {}

  return (
    <>
      <If teste = {usuario && usuario.nome && usuario.email}>
        <Text style={styles.text}>Usuario Logado: </Text>
        <Text style={styles.text}>{ usuario.nome} - { usuario.email } </Text> 
      </If>
    </>
  )
}