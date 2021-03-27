import 'react-native-gesture-handler';
import React from 'react'
import { Text, View, FlatList, Alert} from 'react-native'
import { Button, Icon, ListItem,Avatar ,Badge} from 'react-native-elements'
//import { FlatList } from 'react-native-gesture-handler'
import  users from '../data/users'
import { TouchableOpacity } from 'react-native-gesture-handler';
import UsersContext from '../context/UsersContext'
export default props => {

  function confirmUserDelete(user) {
    const { state, dispatch } = useContext(UsersContext)
  function confirmUserDelete(user) {
    Alert.alert('Excluir Usuario', 'Deseja excluir o Usuario')[
      ({
        text: 'Sim',
        onPress() {
          dispatch({
            type:'deleteUser'
          })
        },
      },
      {
        text: 'Nao',
      })
    ];
  }
  function getActions(user){
  
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="solid"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDelete(user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
      </>
    );
    
  
    
  }
 
  function getUserItem({item : user}){
    
    return (
      <TouchableOpacity
        onPress = {() => props.navigation.navigate('UserForm', user)}
      >
      <ListItem bottomDivider>
       
        <Avatar source = {{uri: user.avatarUrl}}/>
        <ListItem.Content>
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <>
        <Button
           onPress = {() => props.navigation.navigate('UserForm', user)} 
          type = "solid"
           icon = {<Icon name="edit" size= {25} color="orange"/>}
        />
        <Button
          onPress = {() => confirmUserDelete(user)} 
          type = "clear"
          icon = {<Icon name="edit" size= {25} color="orange"/>}
        />
     </>   
          
            
        </ListItem>
      </TouchableOpacity>
    )
      
  }
  return (
    <View>
     
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state, users}
        renderItem={getUserItem}

      />
    </View>
  )
}
} 