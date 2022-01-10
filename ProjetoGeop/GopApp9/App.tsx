import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/Routes'


export default function App() {
  return (
    <NavigationContainer>      
      <Routes/>
    </NavigationContainer>
  );
}