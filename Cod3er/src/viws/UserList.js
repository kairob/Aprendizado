import 'react-native-gesture-handler';
import React, { useContext } from 'react'
import { FlatList, View, Text, Alert} from 'react-native'
import { Avatar, Button, ListItem ,Icon} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import users from '../data/users'
import UsersContext from '../context/UsersContext';


export default props => {
  const {state, dispatch} = useContext(UsersContext)
  function createTwoButtonAlert(user) {
    Alert.alert(
      "Excluir Usuário",
      "Deseja excluir usuário ?",
      

      [
        {
          text: "Cancel",
          
          style: "cancel"
        },
        { text: "Sim", onPress: () =>
         dispatch ({
           type: 'deleteUser',
           payload: user,
         })
       }
      ],
      { cancelable: false }
    );
  }
  function getActions(user) {
    return (
      <>
        <TouchableOpacity>
          <Button
            onPress={()=> props.navigation.navigate("UserForms")}   
            type='clear'
            icon={<Icon name="edit" size={25} color="orange"/>}

          />
        </TouchableOpacity>
          
          <Button
            onPress={()=> createTwoButtonAlert(user)}   
            type='clear'
            icon={<Icon name="delete" size={25} color="black"/>}

          />
        
      </>
    )
 }
  function getUserItem({item : user}){
    return(
      <TouchableOpacity 
      
      >
        <ListItem key={user.id} bottomDivider>
          <Avatar source ={{uri: user.avatarUrl}}></Avatar>
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItem.Content>
          <Text>{getActions(user)}</Text>
        </ListItem>
      </TouchableOpacity>

    )
  }
  
  return (
    <View>
      <FlatList
        keyExtractor= {user => user.id.toString() }
        data={state.users}
        renderItem={getUserItem}

      />

      
    </View>
  )
}