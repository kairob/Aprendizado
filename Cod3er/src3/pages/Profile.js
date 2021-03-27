import React from 'react';
import {View, Text, Button} from 'react-native';
const ProfileScreen = ({navigation}) => {
  const goNextPage = () => navigation.navigate('Contacts');
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Go to next page" onPress={goNextPage} />
    </View>
  );
};
export default ProfileScreen;
