import React, { Component } from 'react';
import { Modal, View, Text } from 'react-native';

import { Button, Divider, CheckBox, Icon } from 'react-native-elements';

import { colors } from '../../../constants/colors';
import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

class ComplainModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
  }
  render() {
    return (
      <Modal visible={this.props.show} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0, 0.5)',
            justifyContent: 'center',
          }}>
          <View style={styles.modalBody}>
            <View style={styles.modalWraper}>
              <View>
                <Text
                  style={[globalStyles.gothamMediumRegular, styles.WhatHapp]}>
                  What happens?
                </Text>
                <Text style={[globalStyles.gothamBook, styles.Choose]}>
                  Choose one of option below
                </Text>

                <CheckBox
                  right
                  title="Fraud or spam"
                  fontFamily={globalStyles.gothamBook.fontFamily}
                  textStyle={styles.radioTitle}
                  iconRight
                  checkedIcon={
                    <Icon
                      name="check-circle"
                      type="material-community"
                      color={colors.HEADER}
                      size={25}
                    />
                  }
                  uncheckedIcon={
                    <Icon
                      name="radiobox-blank"
                      type="material-community"
                      color={colors.DIVIDER}
                      size={25}
                    />
                  }
                  checked={this.state.checked}
                />
              </View>
              <Button
                titleStyle={[
                  globalStyles.gothamBold,
                  { color: 'white', fontSize: 17, lineHeight: 23 },
                ]}
                buttonStyle={styles.buttonSend}
                title="Send"
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ComplainModal;
