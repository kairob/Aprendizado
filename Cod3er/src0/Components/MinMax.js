import React from  'react'
import { Text }from 'react-native'
import styles from './estilos'

export default (props) => {
  console.warn(props)
  return (
    <Text style = { styles.text}> 
      O Valor {props.max} é maior que {props.min}
    </Text>
  )
}