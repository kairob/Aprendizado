import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserList from './viws/UserList';
import UserForm from './viws/UserForm';
//import {Icon} from 'react-native-vector-icons';
import {Button, Icon} from 'react-native-elements';
import {UsersProvider} from './context/UsersContext';

const Stack = createStackNavigator();
export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Userlist"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => {
              return {
                title: 'Lista de Usuarios',
                headerRight: () => (
                  <Button
                    onPress={() => {
                      navigation.navigate('UserForm');
                    }}
                    type="clear"
                    icon={<Icon name="add" size={25} color="black" />}
                  />
                ),
              };
            }}
          />

          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: 'Formulario',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}
const screenOptions = {
  headerStyle: {
    backgroundColor: '#7efff4',
  },
  headerTintColor: '#000',
  headerTitleStyle: 'bold',
};
