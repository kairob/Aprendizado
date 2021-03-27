import React from  'react'
import { Button, Text, View }from 'react-native'
import styles from './estilos'
export default function botao (props) {
  
  return (
    
      <Button
         title = "Executar #01"
         onPress={function(){
           console.warn('exec 01')

        }}
      />
          
    
  )

}