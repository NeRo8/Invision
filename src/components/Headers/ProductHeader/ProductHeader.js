import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { colors } from '../../../constants';

import styles from './styles';

class ProductHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressHeart = () => {
    const { addAdToFavorite, item, authStatus } = this.props;

    if (authStatus) {
      addAdToFavorite(item.pk);
    }
  };

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
            underlayColor="transparent"
            name="flag-outline"
            type="material-community"
            color="white"
            size={26}
            onPress={() => this.props.onPressReport()}
          />
          <Icon
            containerStyle={styles.icons}
            underlayColor="transparent"
            name="share-apple"
            type="evilicon"
            color="white"
            size={32}
            onPress={() => {}}
          />

          <Icon
            underlayColor="transparent"
            containerStyle={styles.icons}
            name={item.is_favorite ? 'heart' : 'heart-outline'}
            color={item.is_favorite ? colors.HEART_ACTIVE : 'white'}
            type="material-community"
            size={24}
            onPress={this.handlePressHeart}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(ProductHeader);
