import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './Styles'
const ContactsScreen = ({navigation}) =>{
const goNextPage = () => navigation.navigate('Galery')
return (
  <View>
    <Text>Contacts</Text>
    <Button title="Go to next page" onPress={goNextPage} />
  </View>
)

}
export default ContactsScreen;