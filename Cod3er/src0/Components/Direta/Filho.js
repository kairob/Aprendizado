import React from 'react';
import {Text} from 'react-native';
import styles from '../estilos';
export default (props) => {
  return (
    <>
      <Text style={styles.text}> {props.a}</Text>
      <Text style={styles.text}> {props.b}</Text>
    </>
  );
};
