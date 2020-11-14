
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import estilos from './Sstilos.js';

export default function comp1(props) {
    return (
        <Text style= {estilos.texto2}> {props.propriedade}: usar={props.usar} </Text>
    )
}

