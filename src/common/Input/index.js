import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Colors} from '../../Styles';

const Input = ({placeholder, inputStyle, placeholderColor, secure, type}) => (
  <TextInput
    placeholder={placeholder}
    style={[styles.input, inputStyle]}
    placeholderTextColor={placeholderColor}
    secureTextEntry={secure}
    keyboardType={type}
  />
);

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(147, 153, 178, 0.3)',
    borderRadius: 50,
    paddingHorizontal: 15,
    color: Colors.TEXT_BLACK,
    marginTop: 5,
  },
});
