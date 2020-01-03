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

  handlePressHeart = () => {
    const {
      addAdToFavorite,
      removeAdFromFavorite,
      token,
      item,
      authStatus,
    } = this.props;

    if (authStatus) {
      if (item.is_favorite === true) {
        removeAdFromFavorite(item.pk, token);
      } else {
        addAdToFavorite(item.pk, token);
      }
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

export default withNavigation(HeaderProduct);
