import React, {Fragment}from  'react'
import { Text, View }from 'react-native'
import styles from './estilos'

export default function (props) {
  <View >
    <Text styles={styles.text}>{props.principal}</Text>
    <Text>{props.secundaria}</Text>
  </View>
  
} 