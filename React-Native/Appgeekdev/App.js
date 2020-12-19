import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'end',backgroundColor:'#6A5ACD'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} style={{ flex: 1, alignItems: 'center',justifyContents: 'center', backgroundColor: 'pink'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
