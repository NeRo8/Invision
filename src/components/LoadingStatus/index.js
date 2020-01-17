import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

import { gothamBook } from '../../constants/fonts';
import { colors } from '../../constants';

const LoadingStatus = ({ text, bgColor }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colors.HEADER} />
    <Text style={styles.loadingText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.BACKGROUND,
  },
  loadingText: {
    ...gothamBook,
    fontSize: 18,
    marginTop: 20,
  },
});

export default LoadingStatus;
