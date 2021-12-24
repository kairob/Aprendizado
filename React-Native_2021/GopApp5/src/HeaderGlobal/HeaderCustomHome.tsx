/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';

import StyleHeader from './StylesHeaders';

const HeaderCustomHome: React.FC = () => {
  return (
    <View style={StyleHeader.ContainerHeader}>
      <View style={StyleHeader.BoxGroup} />
      <View style={StyleHeader.BoxGroup} />
      <View style={StyleHeader.BoxGroup} />
    </View>
  );
};
export default HeaderCustomHome;
