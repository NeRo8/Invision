import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';
import styles from './styles';

class HeaderPay extends Component {
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
            underlayColor={colors.HEADER}
            type="material-community"
            color="white"
            size={32}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={[globalStyles.gothamBold, styles.headerText]}>
            Add ad
          </Text>
        </View>
        <View style={styles.selectedBlock}>
          <View style={styles.simpleContainer}>
            <TouchableOpacity style={styles.selectedElementActive}>
              <Text style={styles.selectedElementTextActive}>Credit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectedElement}>
              <Text style={styles.selectedElementText}>Knet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectedElement}>
              <Text style={styles.selectedElementText}>Paypal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default HeaderPay;
