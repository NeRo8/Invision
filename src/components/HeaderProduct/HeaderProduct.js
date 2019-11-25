import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { colors } from '../../constants';

import styles from './styles';

class HeaderProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <Icon
            containerStyle={styles.icons}
            name="chevron-left"
            type="feather"
            underlayColor="transparent"
            color="white"
            size={32}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

        <View style={styles.rightBlock}>
          <Icon
            containerStyle={styles.icons}
            name="flag-outline"
            type="material-community"
            color="white"
            size={26}
            onPress={() => this.props.navigation.goBack()}
          />
          <Icon
            containerStyle={styles.icons}
            name="share-apple"
            type="evilicon"
            color="white"
            size={32}
            onPress={() => this.props.onPressShere()}
          />
          <Icon
            containerStyle={styles.icons}
            name={item.is_favorite ? 'heart' : 'heart-outline'}
            color={item.is_favorite ? colors.HEART_ACTIVE : 'white'}
            type="material-community"
            size={24}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(HeaderProduct);
