import React, { Component } from 'react';
import { View, Text, TouchableOpacity, I18nManager } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './styles';

import { translate } from '../../../i18n';

class AdsFiltersHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressDone = () => {
    const { getAdsList, navigation } = this.props;

    getAdsList();

    navigation.goBack();
  };

  render() {
    const { city, query, setFilters } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <Icon
            name="chevron-left"
            type="feather"
            color="white"
            underlayColor="transparent"
            size={32}
            onPress={() => this.props.navigation.goBack()}
            containerStyle={{ width: 50 }}
            iconStyle={{ transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] }}
          />
          <Text style={styles.headerText}>{translate('filters')}</Text>
          <TouchableOpacity onPress={this.handlePressDone}>
            <Text style={styles.headerRight}>{translate('done')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyBlock}>
          <Input
            leftIcon={
              <Icon name="ios-search" type="ionicon" color="white" size={20} />
            }
            value={query}
            placeholder={translate('searchAd')}
            placeholderTextColor="white"
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStl}
            containerStyle={styles.inputContainer}
            onChangeText={text => setFilters('q', text)}
          />
          <Input
            leftIcon={
              <Icon name="ios-pin" type="ionicon" color="white" size={20} />
            }
            value={city}
            placeholder={translate('chooseLocation')}
            placeholderTextColor="white"
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStl}
            containerStyle={styles.inputContainer}
            onChangeText={text => setFilters('city', text)}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(AdsFiltersHeader);
