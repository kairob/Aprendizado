//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Comp1 from './Componentes/comp1';

export default function App1() {
  return (
    <View style={estilos.container}>
      <Comp1 propriedade= "No Componente" usar ="PROPriedasdes"/>
      <Comp1 propriedade= "No Componente" usar ="PROPriedasdes"/>
      <Comp1 propriedade= "No Componente" usar ="PROPriedasdes"/>      
      <Text style={estilos.txt0}> Agora melhorou </Text>
      <Text style={{color:'#100',fontSize:30}}> Formatação in line </Text>
    </View>

  );
}
