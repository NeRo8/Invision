import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import globalStyles from '../../constants/globalStyles';

class HeaderAdsFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { activeScreen } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <Icon
            name="chevron-left"
            type="material-community"
            color="white"
            size={32}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={[styles.headerText, globalStyles.gothamBold]}>
            Add ad
          </Text>
        </View>
        <View style={styles.selectedBlock}>
          <View style={styles.simpleContainer}>
            <TouchableOpacity
              style={
                activeScreen
                  ? styles.selectedElementActive
                  : styles.selectedElement
              }
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text
                style={
                  activeScreen
                    ? styles.selectedElementTextActive
                    : styles.selectedElementText
                }>
                SignIn
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                !activeScreen
                  ? styles.selectedElementActive
                  : styles.selectedElement
              }
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text
                style={
                  !activeScreen
                    ? styles.selectedElementTextActive
                    : styles.selectedElementText
                }>
                Create account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(HeaderAdsFilters);
