import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class CreateAdHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { index } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>PASSPORT</Text>
        <Text style={styles.underHeaderText}>Step {index}</Text>
        <View style={styles.containerRow}>
          <View style={index === 1 ? styles.activeView : styles.unactiveView} />
          <View style={index === 2 ? styles.activeView : styles.unactiveView} />
          <View style={index === 3 ? styles.activeView : styles.unactiveView} />
          <View style={index === 4 ? styles.activeView : styles.unactiveView} />
          <View style={index === 5 ? styles.activeView : styles.unactiveView} />
        </View>
      </View>
    );
  }
}

export default CreateAdHeader;
