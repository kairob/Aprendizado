/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import StyleHeader from './StylesHeaders';

const HeaderCustomHome: React.FC = () => {
  return (
    <>
      <View style={StyleHeader.ContainerHeader}>
        <View style={StyleHeader.BoxHome} />
        <View style={StyleHeader.BoxHome} />
        <View style={StyleHeader.BoxHome} />
      </View>
    </>
  );
};
export default HeaderCustomHome;
