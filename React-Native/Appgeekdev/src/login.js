import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Button, Sidebar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Login ({navigation, props}) {

  return (

       <View style={styles.screen}>

        <View style={styles.emailbox}>
        <TextInput style={styles.emailtext}
        placeholder ="Digite seu Email"
        fontSize = {20}
        keyboardType ={'email.email-address'}/>
        </View>
        <View style={styles.senhabox}>
        <TextInput style={styles.senhatext}
        secureTextEntry={true}
        placeholder ="Digite sua senha"
        fontSize = {20}
        />
        </View>
        <View style={styles.loginbutton}>

        <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}>

        <Text style={styles.logintext}> Login </Text>
        </TouchableOpacity>
        </View>

       </View>
  );


}
function HomeScreen({ navigation, props}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


const styles=StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    alignContent:'center'
  },
  /*logo: {
    borderRadius: 30,
    marginTop: 30,
  },*/
  emailbox:{
    backgroundColor:'#ddd',
    marginTop: 20,
    paddingHorizontal: 300,

    borderRadius: 10,
  },
  emailtext: {
    marginLeft: -130
  },
  senhabox:{
    backgroundColor:'#ddd',
    marginTop: 20,
    paddingHorizontal: 300,

    borderRadius: 10,
  },
  senhatext: {
    marginLeft: -130
  },
  loginbutton: {
    backgroundColor: '#1e992b',
    paddingHorizontal: 50,
    marginTop:30,
    paddingVertical:15,
    borderRadius: 10,

  },
  logintext: {
    color: '#fff',
    fontStyle: 18,
  },
});
export default Login;
