import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

const LargeInput = ({ ...props }) => (
  <Input
    {...props}
    multiline
    inputStyle={styles.inputStyles}
    inputContainerStyle={styles.inputContainerStyle}
    containerStyle={styles.inputContainer}
  />
);

export default LargeInput;
