/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Code,
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';

// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
        
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Code>App.tsx</Code>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={'xl'}>
              Learn NativeBase
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
