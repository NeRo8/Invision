import React, { Component } from 'react';
import { View } from 'react-native';

import LoadingStatus from '../../../components/LoadingStatus';

import styles from './styles';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { authStatus } = this.props;

    if (!authStatus) {
      return <LoadingStatus text="First you need sign in..." />;
    }

    return <View style={styles.container}></View>;
  }
}

export default Services;
