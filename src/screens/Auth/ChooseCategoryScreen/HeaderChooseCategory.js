import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../../constants/colors';
import globalStyles from '../../../constants/globalStyles';

class HeaderChooseCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name="chevron-left"
          type="material-community"
          color="white"
          size={32}
          onPress={() => this.props.navigation.navigate('StepOne')}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginRight: 40,
          }}>
          <Text style={[globalStyles.gothamBold, styles.headerTitle]}>
            Category
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    height: Platform.OS === 'ios' ? 74 : 64,
    backgroundColor: colors.HEADER,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 17,
    color: 'white',
  },
});

export default HeaderChooseCategory;
