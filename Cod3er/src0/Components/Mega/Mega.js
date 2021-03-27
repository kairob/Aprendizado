import React, {Component} from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import styles from '../estilos'
import MegaNumeros from './MegaNumeros'

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros : []

  }
  
  alternarQtdeNumeros =(qtde) => {
    this.setState ({qtdeNumeros:+qtde})
  }
  //Função recursiva ouseja chama a si mesma
  gerarNumerosNaoContido = nums => {
    const novo = parseInt(Math.random() * 60 ) + 1
    return(
     nums.includes(novo) ? this.gerarNumerosNaoContido(nums) : novo
    )
  }
  //gerarNumeros = () => {
  //  const numeros = Array (this.state.qtdeNumeros)
  //  .fill()
  //  .reduce(n => [...n, this.gerarNumerosNaoContido(n)], [])
  //  this.setState({numeros})
  //}
  gerarNumeros = () => {
    const {qtdeNumeros}= this.state
    const numeros = []
    for(let i = 0 ; i <qtdeNumeros ; i++) {
      const n = this.gerarNumerosNaoContido(numeros)
      numeros.push(n)
    }
    numeros.sort((a,b)=> a - b)
    this.setState({ numeros })

  }
  exibirNumeros = () => {
    const nums = this.state.numeros
    return (
      nums.map(num => {
        return <MegaNumeros key ={num} num = {num}/>
      })
    )
  }

  render () {
    return (
      <>
        <Text style={styles.text}> Gerador de Mega Sena  </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth:1}}
          placeholder = "Qtde de Números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={qtde => this.alternarQtdeNumeros(qtde)}
         
        />
        <Button
          title='gerar'
          onPress={this.gerarNumeros}
        />
        <View style={{
          marginTop: 20,
          flexDirection:'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>

        {this.exibirNumeros()}
        </View>
      </>

    )
  }
}