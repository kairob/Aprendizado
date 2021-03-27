import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/Home';
import {Button, Icon} from 'react-native-elements';
import LoginScreen from './Login.routes';

const Stack = createStackNavigator();
export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name=" HomeScreen"
        component={HomeScreen}
        options={({navigation}) => {
          return {
            headerLeft: () => (
              <Button
                onPress={() => navigation.toggleDrawer()}
                type="clear"
                icon={<Icon name="menu" size={25} color="orange" />}
              />
            ),
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
                type="clear"
                icon={<Icon name="menu" size={25} color="orange" />}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}
