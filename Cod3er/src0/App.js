import React from 'react';
import {StyleSheet, View} from 'react-native';
//import ContadoV2 from './Components/Contador/ContadorV2'
//import Pai from './Components/Indireta/Pai';
//import Pai from './Components/Direta/Pai';
//import Contador from './Components/Contador';
//import b from './Components/botao'
//import Aleatorio from './Components/aleatorio';
// MinMax from './Components/MinMax';
//import Primeiro from './Components/primeiro';
//import Titulo from './Components/titulo';
//import Familia from './Components/Relacao/Familia';
//import Membros from './Components/Relacao/Membros';
import styles from './Components/estilos';
//import ListaProdutos from './Components/Produtos/ListaProdutos';
//import ListaProdutosV2 from './Components/Produtos/ListaProdutosV2';
//import UsuarioLogado from './Components/UsuarioLogado';
//import DigiteSeuNome from './Components/DigiteSeuNome'
//import Quadrado from './Components/Layout/Quadrado'
////import FlexBoxV1 from './Components/Layout/FlexBoxV1';
//import FlexBoxV2 from './Components/Layout/FlexBoxV2';
//import FlexBoxV3 from './Components/Layout/FlexBoxV3';
//import FlexBoxV4 from './Components/Layout/FlexBoxV4';
import Mega from './Components/Mega/Mega'


/*ARROW Function*/
export default function App() {
  return (
    <>
      <View style={style.App}>
        <Mega qtdeNumeros={12}/>
        {/*<b/>
        <FlexBoxV4/>
        <FlexBoxV3/>
        <FlexBoxV2/>
        <FlexBoxV1/>
        <DigiteSeuNome/>
        <ListaProdutos/>
        <ListaProdutosV2/>
        <UsuarioLogado usuario= {{ nome : "rob", email : 'rob@rob.com'}}/>
        <UsuarioLogado usuario= {{ nome : "Angela"}}/>
        <UsuarioLogado usuario= {{ email : 'rob@rob.com'}}/>
        <UsuarioLogado usuario= {{}}/>

        <UsuarioLogado usuario= {{}}/>
        <Familia>
          <Membros nome = "Roberto" sobrenome = "Rodrigues"/>
          <Membros nome = "Angela" sobrenome = "Rodrigues"/>        
        </Familia>
        <Familia>
          <Membros nome = "Isabela" sobrenome = "Martins"/>
          <Membros nome = "Marcelo" sobrenome = "Martins"/> 
          <Membros nome =  "kaique" sobrenome = "Martins"/>
          <Membros nome = "Sophia" sobrenome = "Martins"/>        
        </Familia>
          <ContadoV2/>
         <Pai />
         <Pai />
         <Titulo principal = "Cadastro de produto " secundario = "tela de cadastro de Produto"/>
         <Aleatorio min = {1} max ={60}/>
         <Aleatorio min = {1} max ={60}/>
         <Aleatorio min = {1} max ={60}/>
         <Aleatorio min = {1} max ={60}/>
         <Aleatorio min = {1} max ={60}/>
         <Aleatorio min = {1} max ={60}/> */} 
      </View>
    </>
  );

}
const style = StyleSheet.create ({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  }
})