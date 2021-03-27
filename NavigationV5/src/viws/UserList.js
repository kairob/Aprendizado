import React, {useContext} from 'react';
import {View, FlatList, TouchableOpacity, Alert} from 'react-native';
import {Button, Icon, Avatar, ListItem} from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default function (props) {
    const {state, dispatch} = useContext(UsersContext);
    function confirmUserDelete(user) {
        return Alert.alert('Excluir Usuario', 'Deseja excluir o usuário', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    });
                },
            },
            {
                text: 'Não',
            },
        ]);
    }

    function getUserItem({item: user}) {
        return (
            <TouchableOpacity>
                <ListItem bottomDivider>
                    <Avatar source={{uri: user.avatarUrl}} />
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                    <>
                        <Button
                            onPress={() =>
                                props.navigation.navigate('UserForm', user)
                            }
                            type="clear"
                            icon={<Icon name="edit" size={25} color="orange" />}
                        />
                        <Button
                            onPress={() => confirmUserDelete(user)}
                            type="clear"
                            icon={
                                <Icon name="delete" size={25} color="black" />
                            }
                        />
                    </>
                </ListItem>
            </TouchableOpacity>
        );
    }
    return (
        <View>
            <FlatList
                data={state.users}
                keyExtractor={(user) => user.id.toString()}
                renderItem={getUserItem}
            />
        </View>
    );
}
