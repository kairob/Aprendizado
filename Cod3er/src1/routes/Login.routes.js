import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../pages/Login';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function Login(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Login;