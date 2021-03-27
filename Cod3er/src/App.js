import 'react-native-gesture-handler';
import React from 'react'
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserList from './viws/UserList'
import UserForms from './viws/UserForms'
import { Button , Icon} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UsersProvider } from './context/UsersContext';
const Stack = createStackNavigator()

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
          <Stack.Screen 
            name="UserList" 
            component={UserList}
            options={({navigation})=> {
              return{
                title: 'Lista de Usuários',
                headerRight: ()=>(
                  <TouchableOpacity>
                  <Button
                    onPress={()=> navigation.navigate("UserForms")}
                    type='clear'
                    icon={<Icon name="add" size={25} color="white"/>}
                  />
                  </TouchableOpacity>
                )
              }
              
            }}   
          
          
          />
          <Stack.Screen name="UserForms" component={UserForms}
            options={{
              title: "Formularios de Usuários"
            }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </UsersProvider>
  )
}
const screenOptions = {
  headerStyle: {
    backgroundColor: '#79c0ff'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
  

}