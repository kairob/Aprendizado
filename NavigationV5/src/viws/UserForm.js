import React, {useContext, useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import UsersContext from '../context/UsersContext';
import styles from '../Styles';
export default function ({route, navigation}) {
    const [user, setUser] = useState(route.params ? route.params : {});
    const {dispatch} = useContext(UsersContext);
    return (
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={(name) => setUser({...user, name})}
                placeholder="Informe o nome"
                value={user.name}
            />

            <Text>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={(email) => setUser({...user, email})}
                placeholder="Informe o Email"
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={styles.input}
                onChangeText={(avatarUrl) => setUser({...user, avatarUrl})}
                placeholder="Informe URL do Avatar"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'UpdateUser' : 'createUser',
                        payload: user,
                    });
                    navigation.goBack();
                }}
            />
        </View>
    );
}
