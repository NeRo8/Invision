import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { colors } from '../../constants';

const LoadingStatus = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colors.HEADER} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingStatus;
