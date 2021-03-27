import React from  'react'
import { Text }from 'react-native'
import styles from './estilos'

export default function Aleatorio (props) {  
  const delta = props.max - props.min +1
  const aleatorio = parseInt(Math.random() * delta) + props.min
  return(
    <Text style = {styles.text}>
      O valor aleatorio é {aleatorio}
    </Text>
  )
}