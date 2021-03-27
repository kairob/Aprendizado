import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import styles from '../estilos'

export default props => {
  return (
    <View style={style.container}>
      <Text style ={[styles.text , style.Num]}> 
        {num}
      </Text>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25,
  },
  Num: {
    color: '#fff'
  }
})