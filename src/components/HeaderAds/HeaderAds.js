import React from 'react';
import { View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

import { colors } from '../../constants/colors';

import styles from './styles';

const HeaderAds = () => (
  <View style={styles.container}>
    <View style={styles.searchContainer}>
      <Input
        leftIcon={() => (
          <Icon
            name="ios-search"
            type="ionicon"
            color={colors.UNACTIVE}
            size={32}
          />
        )}
        placeholder="Search ad..."
        placeholderTextColor={colors.UNACTIVE}
        leftIconContainerStyle={styles.leftIconContainer}
        inputContainerStyle={styles.inputContainerS}
        containerStyle={styles.inputContainer}
      />
    </View>
    <View style={styles.filtersContainer}>
      <Button
        title="Choose category"
        titleStyle={styles.btnTitleStyle}
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
      />

      <Button
        title="Add filters"
        titleStyle={styles.btnTitleStyle}
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
      />
    </View>
  </View>
);

export default HeaderAds;
