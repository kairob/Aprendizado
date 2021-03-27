import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import HomeScreen from '../pages/Home';

const Stack = createStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=" HomeScreen"
        component={HomeScreen}
        options={{
          headerTintColor: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
export default Home;
