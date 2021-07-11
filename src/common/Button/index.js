import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Typography} from '../../Styles';

const Button = ({buttonStyles, textStyles, onPress, children}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, buttonStyles]}
    activeOpacity={0.6}>
    <Text style={[styles.defaultText, textStyles]}>{children}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  defaultText: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_MEDIUM,
  },
  button: {
    backgroundColor: Colors.YELLOW,
    paddingVertical: Typography.PADDING_VERTICAL,
    borderRadius: 50,
  },
});
