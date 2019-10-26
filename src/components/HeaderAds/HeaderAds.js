import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Input, Icon, Button } from 'react-native-elements';

import { colors } from '../../constants/colors';

import globalStyles from '../../constants/globalStyles';
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
            inputStyle={globalStyles.gothamBook}
            leftIcon={() => (
              <Icon
                name="ios-search"
                type="ionicon"
                color={colors.UNACTIVE}
                size={25}
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
          <View style={styles.btnContainer}>
            <Button
              title="Choose category"
              titleStyle={styles.btnTitleStyle}
              buttonStyle={styles.btnStyle}
              containerStyle={{ marginRight: 5 }}
              onPress={this.handlePressCategory}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button
              style={{ marginLeft: 5 }}
              icon={{
                name: 'filter',
                type: 'material-community',
                color: 'white',
              }}
              title="Add filters"
              titleStyle={styles.btnTitleStyle}
              buttonStyle={styles.btnStyle}
              containerStyle={{ marginLeft: 5 }}
              onPress={this.handlePressFilters}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(HeaderAds);
