import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Error', this.props.error);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>1</Text>
      </View>
    );
  }
}

export default Ads;
