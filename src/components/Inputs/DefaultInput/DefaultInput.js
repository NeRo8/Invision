import React, { Component } from 'react';
import { Input } from 'react-native-elements';

import styles from './styles';

const DefaultInput = ({ ...props }) => (
  <Input
    {...props}
    autoCapitalize="none"
    inputStyle={styles.inputStyle}
    inputContainerStyle={styles.inputContainerStyle}
    containerStyle={styles.inputContainer}
  />
);

export default DefaultInput;
