import React from 'react';
import { View, Text } from 'react-native';
import { FAB } from 'react-native-elements';

export default function FabButton()  {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 5,
          flexGrow: 1,
        }}
      >
      
       
       
        <FAB
          visible={visible}
          onPress={() => setVisible(!visible)}
          placement="right"
          title="Hide"
          icon={{ name: '', color: 'white' }}
          color="red"
        />
        
      </View>
    </>
  );
};