import React, { useState } from 'react'
import { Text } from 'react-native'
import styles from '../estilos'
import ContadorBotoes from './ContadoBotoes'
import ContadorDisplay from './ContadorDisplay'
export default props => {
  const [num, setNum] = useState(0)
  const inc = () => setNum (num + 10)
  const dec = () => setNum (num - 10)

  return (
    <>
      <Text style={styles.text}>
        Contador
      </Text>
      <ContadorDisplay num = {num}/>
      <ContadorBotoes incFN={inc} decTN={dec}/>

    </>

  )
}