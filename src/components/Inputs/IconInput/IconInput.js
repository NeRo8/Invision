import React from 'react';

import { Input, Icon } from 'react-native-elements';

import styles from './styles';

import { colors } from '../../../constants';

const IconInput = ({ iconName, ...props }) => (
  <Input
    {...props}
    leftIcon={() => (
      <Icon
        name={iconName}
        type="ionicon"
        color={colors.ICON_GREY_COLOR}
        size={25}
        underlayColor="transparent"
      />
    )}
    leftIconContainerStyle={styles.leftIconContainer}
    labelStyle={styles.label}
    inputStyle={styles.inpStyle}
    placeholderTextColor={colors.UNACTIVE}
    inputContainerStyle={[styles.inputContainerS, props.inputContainerStyle]}
    containerStyle={styles.inputContainer}
  />
);

export default IconInput;
