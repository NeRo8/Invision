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

  handlePressDone = () => {
    const { filters, getAdsList, navigation } = this.props;

    getAdsList(filters);

    navigation.goBack();
  };

  render() {
    const { city, query, setFilters, filters } = this.props;

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
          />
          <Text style={styles.headerText}>Filters</Text>
          <TouchableOpacity onPress={this.handlePressDone}>
            <Text style={styles.headerRight}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyBlock}>
          <Input
            leftIcon={
              <Icon name="ios-search" type="ionicon" color="white" size={20} />
            }
            value={query}
            placeholder="Search ad..."
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
            placeholder="Choose location"
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

export default withNavigation(HeaderAdsFilters);
