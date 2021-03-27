import React from 'react'
import { Text } from 'react-native'
import style from '../estilos'
import Membros from './Membros'

export default props => {
  return (
    <> 
      <Text>[Inicio] Familia Rodrigues</Text>         
      {props.children}
      <Text>[Fim] Familia Martins</Text>         

    </>
  )
}