import React from 'react';
import { Input } from 'react-native-elements';

import styles from './styles';

const SmallInput = ({ ...props }) => (
  <Input
    {...props}
    inputStyle={styles.inputStyles}
    inputContainerStyle={styles.inputContainerStyle}
    containerStyle={styles.inputContainer}
  />
);

export default SmallInput;
