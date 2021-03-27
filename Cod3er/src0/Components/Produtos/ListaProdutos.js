import React from 'react'
import { Text } from 'react-native'
import styles from '../estilos'
import produtos from './produtos'
/*função MAP trasnforma os elementos do array em outros elementos modificado
 atributo KEY(representa chave) deternina valor unico para o ID
*/

export default props => {
  function obterLista() {
    return produtos.map(p => {
      return <Text key={p.id}>{p.id }){p.nome} tem preço de:{p.preço}</Text>

    })
  }
  return (
    <>
      <Text style={styles.text}>
        Lista de Produtos
      </Text>
     {/* OU {produtos.map (p => {
        return <Text key={p.id}>{p.id }){p.nome} tem preço de:{p.preço}</Text>
      })}*/}
      {obterLista()}
    </>
  )
}