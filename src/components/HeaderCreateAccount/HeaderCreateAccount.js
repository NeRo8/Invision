import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const HeaderCreateAccount = ({ index }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>PASSPORT</Text>
      <Text style={styles.underTitle}>Step {index}</Text>
      <View style={styles.containerView}>
        <View style={index === 1 ? styles.activeView : styles.unactiveView} />
        <View style={index === 2 ? styles.activeView : styles.unactiveView} />
        <View style={index === 3 ? styles.activeView : styles.unactiveView} />
        <View style={index === 4 ? styles.activeView : styles.unactiveView} />
        <View style={index === 5 ? styles.activeView : styles.unactiveView} />
      </View>
    </View>
  );
};

export default HeaderCreateAccount;
