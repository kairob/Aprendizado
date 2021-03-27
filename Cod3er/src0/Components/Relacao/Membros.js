import React from 'react'
import { Text } from 'react-native'
import style from '../estilos'

export default props => {
  return (
    <>
      <Text style={style.text}>
        {props.nome} {props.sobrenome}      
      </Text>
    </>
  )
}