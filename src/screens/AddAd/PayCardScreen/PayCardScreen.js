import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';

import globalStyles from '../../../constants/globalStyles';
import styles from './styles';

class PayCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.container, { paddingHorizontal: 15 }]}>
          <View style={styles.cardView}>
            <Icon
              name="ios-camera"
              type="ionicon"
              color="white"
              underlayColor="transparent"
              size={48}
              containerStyle={styles.iconContainer}
              onPress={() => {}}
            />

            <Text style={[globalStyles.gothamBook, styles.textHint]}>
              Take a photo of your card
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Input
              placeholder="Credit card number"
              inputStyle={[globalStyles.gothamBook, styles.inputRowStyle]}
              inputContainerStyle={styles.inputRowCStyle}
              containerStyle={styles.inputContainer}
            />
            <View style={{ flexDirection: 'row' }}>
              <Input
                placeholder="4584"
                inputStyle={[globalStyles.gothamBook, styles.inputRowStyle]}
                inputContainerStyle={styles.inputRowCStyle}
                containerStyle={styles.inputRowContainer}
              />
              <Input
                placeholder="09/20"
                inputContainerStyle={styles.inputRowCStyle}
                inputStyle={[globalStyles.gothamBook, styles.inputRowStyle]}
                containerStyle={styles.inputRowContainer}
              />
              <Input
                placeholder="2021"
                inputStyle={[globalStyles.gothamBook, styles.inputRowStyle]}
                inputContainerStyle={styles.inputRowCStyle}
                containerStyle={styles.inputRowContainer}
              />
            </View>
            <Input
              placeholder="CVC/CVV"
              inputStyle={[globalStyles.gothamBook, styles.inputRowStyle]}
              inputContainerStyle={styles.inputRowCStyle}
              containerStyle={styles.inputContainer}
            />
          </View>
        </View>
        <Button
          title="BUY AD (150 KWD)"
          titleStyle={[globalStyles.gothamBold, styles.btnTitle]}
          buttonStyle={styles.btnStyle}
        />
      </ScrollView>
    );
  }
}

export default PayCardScreen;
