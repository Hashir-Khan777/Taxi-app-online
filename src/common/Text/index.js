import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Typography} from '../../Styles';

const MyText = ({children, TextStyles}) => (
  <Text style={[styles.text, TextStyles]}>{children}</Text>
);

export default MyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});
