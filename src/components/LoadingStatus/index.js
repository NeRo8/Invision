import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { colors } from '../../constants';

const LoadingStatus = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ActivityIndicator size="large" color={colors.HEADER} />
  </View>
);

export default LoadingStatus;
