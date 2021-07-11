import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

const Icon = ({name, fill, iconHeight, style}) => (
  <View style={{display: 'flex', justifyContent: 'center'}}>
    <SvgXml xml={name} fill={fill} style={style} height={iconHeight} />
  </View>
);

export default Icon;
