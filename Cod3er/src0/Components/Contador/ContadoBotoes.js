import React from 'react'
import { Button, Text, View , StyleSheet} from 'react-native'

export default props => {
  return (
    <View style={style.Botoes}>
      <Button title = "+" onPress={props.incFN}/>      
      <Button title = "-" onPress={props.decTN}/>
    </View>
  )
}
const style = StyleSheet.create({
  Botoes:{
    flexDirection :'row'
  }
})