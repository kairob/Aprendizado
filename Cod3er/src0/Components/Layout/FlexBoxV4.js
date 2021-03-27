import React from 'react'
import { View, StyleSheet} from 'react-native'
export default props => {
  
  return (
    <>
      <View style={style.FlexV4}>
        <View style={style.V0}/>
        <View style={style.V1}/>
        <View style={style.V2}/>
      </View>
    </>
  )
}
const style = StyleSheet.create ({
  FlexV4: {
    flexGrow: 1,
    width:100,
    backgroundColor: '#000',
  },
  V0: {
    height: 0,
    backgroundColor: '#ff801a',
  },
  V1: {
    flexGrow: 1,
    backgroundColor: '#50d1f6',
  },
  V2: {
    flexGrow: 1,
    backgroundColor: '#dd22c1',
  }

})