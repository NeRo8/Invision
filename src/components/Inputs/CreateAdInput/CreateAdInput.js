import React from 'react';
import { Input } from 'react-native-elements';

import { colors } from '../../../constants';
import styles from './styles';

const CreateAdInput = ({ ...props }) => (
  <Input
    {...props}
    autoCapitalize="none"
    placeholderTextColor={colors.LABEL_GREY_COLOR}
    inputStyle={styles.inputStyle}
    inputContainerStyle={styles.inputContainerStyle}
    containerStyle={styles.inputContainer}
  />
);

export default CreateAdInput;
