import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { globalStyles } from '../../constants';

import styles from './styles';

class HeaderAdsFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <Icon
            name="chevron-left"
            type="feather"
            color="white"
            size={32}
            onPress={() => this.props.navigation.goBack()}
            containerStyle={{ width: 50 }}
          />
          <Text style={[globalStyles.gothamBold, styles.headerText]}>
            Filters
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[globalStyles.gothamBook, styles.headerRight]}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyBlock}>
          <Input
            leftIcon={
              <Icon name="ios-search" type="ionicon" color="white" size={20} />
            }
            placeholder="Search ad..."
            placeholderTextColor="white"
            inputStyle={[globalStyles.gothamBook, styles.inputStyle]}
            inputContainerStyle={styles.inputContainerStl}
            containerStyle={styles.inputContainer}
          />
          <Input
            leftIcon={
              <Icon name="ios-pin" type="ionicon" color="white" size={20} />
            }
            placeholder="Choose location"
            placeholderTextColor="white"
            inputStyle={[globalStyles.gothamBook, styles.inputStyle]}
            inputContainerStyle={styles.inputContainerStl}
            containerStyle={styles.inputContainer}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(HeaderAdsFilters);
