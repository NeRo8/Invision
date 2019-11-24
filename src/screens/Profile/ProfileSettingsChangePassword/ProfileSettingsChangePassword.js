import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Switch } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { colors, globalStyles } from '../../../constants';

import styles from './styles';

class ProfileSettingsChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [
        { title: 'Current Password*', header: true },
        { title: 'Current Password', header: false },
        { title: 'New Password*', header: true },
        { title: 'New Password', header: false },
        { title: 'Confirm Password*', header: true },
        { title: 'Confirm Password', header: false },
        { title: 'Save changes', button: true },
      ],
    };
  }
  renderItem = ({ item }) => {
    if (item.button) {
      return (
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={[globalStyles.gothamBold, styles.buttonTextStyle]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    } else if (item.header) {
      return (
        <View style={styles.header}>
          <Text style={[globalStyles.gothamBold, styles.elementTitle]}>
            {item.title}
          </Text>
        </View>
      );
    } else if (!item.header) {
      if (!item.toggle) {
        return (
          <Input
            inputStyle={[globalStyles.gothamBook, styles.elementTitleNonHeader]}
            leftIcon={() => (
              <Icon
                name="md-key"
                type="ionicon"
                color={colors.ICON_GREY_COLOR}
                size={25}
              />
            )}
            placeholder={item.title}
            placeholderTextColor={colors.UNACTIVE}
            leftIconContainerStyle={styles.leftIconContainer}
            inputContainerStyle={styles.inputContainerS}
            containerStyle={styles.inputContainer}
          />
        );
      } else if (item.toggle) {
        return (
          <View style={styles.elementContainer}>
            <Text
              style={[styles.elementTitleNonHeader, globalStyles.gothamBook]}>
              {item.title}
            </Text>
            <Switch
              ios_backgroundColor={colors.DEFAULT}
              trackColor={{
                true: colors.HEADER,
                false: colors.DEFAULT,
              }}
            />
          </View>
        );
      }
    }
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 10, marginLeft: 15, marginRight: 15 }}>
        <FlatList
          data={this.state.categoryList}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item}
          stickyHeaderIndices={this.state.stickyHeaderIndices}
        />
      </View>
    );
  }
}

export default withNavigation(ProfileSettingsChangePassword);
