import React, { Component } from 'react';
import { View } from 'react-native';

import LoadingStatus from '../../../components/LoadingStatus';

import styles from './styles';

import { translate } from '../../../i18n';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { authStatus } = this.props;

    if (!authStatus) {
      return <LoadingStatus text={translate('firstYouNeed')} />;
    }

    return <View style={styles.container}></View>;
  }
}

export default Events;
