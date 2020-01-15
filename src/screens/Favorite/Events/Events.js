import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <View style={styles.container}></View>;
  }
}

export default Events;
