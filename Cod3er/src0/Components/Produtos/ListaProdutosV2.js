import React from 'react'
import { FlatList, Text } from 'react-native'
import styles from '../estilos'
import produtos from './produtos'
/* data: Dados
   renderItem :Referenciar itens
   KEYEXTRACTOR : chave ID 

*/

export default props => {
  const produtoRender = ({item: p})=>{
      return <Text>{p.id }){p.nome} tem preço de:{p.preço}</Text>
    }
    
   return (
    <>
      <Text style={styles.text}>
        Lista de Produtos V2
      </Text>
      <FlatList
        data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={produtoRender}


      />
    </>
  )
}