import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const HeaderCreateAccount = ({ index }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>PASSPORT</Text>
      <Text style={styles.underTitle}>Step {index}</Text>
      <View style={styles.containerView}>
        <View style={styles.activeView} />
        <View style={styles.unactiveView} />
        <View style={styles.unactiveView} />
        <View style={styles.unactiveView} />
        <View style={styles.unactiveView} />
      </View>
    </View>
  );
};

export default HeaderCreateAccount;
