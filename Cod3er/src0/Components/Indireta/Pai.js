import React, { useState} from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import styles from '../estilos'
export default function Pai (props)  {
  const [num, setNum] = useState(0)
  function exibirValor(numero){
    setNum(numero)
  }
  return (
    <>
      <Text styles={styles.text}> {num}</Text>
      <Filho
        min = {1}
        max = {60}
        funcao = {exibirValor}
      />
    </>
  )
}