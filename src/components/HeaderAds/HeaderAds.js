import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Input, Icon, Button } from 'react-native-elements';

import { colors } from '../../constants/colors';

import styles from './styles';

class HeaderAds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressCategory = () => {
    this.props.navigation.navigate('Category');
  };

  handlePressFilters = () => {
    this.props.navigation.navigate('Filters');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Input
            leftIcon={() => (
              <Icon
                name="ios-search"
                type="ionicon"
                color={colors.UNACTIVE}
                size={32}
              />
            )}
            placeholder="Search ad..."
            placeholderTextColor={colors.UNACTIVE}
            leftIconContainerStyle={styles.leftIconContainer}
            inputContainerStyle={styles.inputContainerS}
            containerStyle={styles.inputContainer}
          />
        </View>
        <View style={styles.filtersContainer}>
          <Button
            title="Choose category"
            titleStyle={styles.btnTitleStyle}
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            onPress={this.handlePressCategory}
          />

          <Button
            icon={{
              name: 'filter',
              type: 'material-community',
              color: 'white',
            }}
            title="Add filters"
            titleStyle={styles.btnTitleStyle}
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            onPress={this.handlePressFilters}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(HeaderAds);
