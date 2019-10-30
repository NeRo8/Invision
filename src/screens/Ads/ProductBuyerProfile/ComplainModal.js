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
      checked: false,
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
            <View style={styles.closeView}>
              <Icon
                name="close"
                type="material-community"
                iconStyle={{ paddingTop: 15, paddingRight: 15 }}
                color={colors.UNACTIVE}
              />
            </View>
            <View style={styles.modalWraper}>
              <Text style={[globalStyles.gothamMediumRegular, styles.WhatHapp]}>
                What happens?
              </Text>
              <Text style={[globalStyles.gothamBook, styles.Choose]}>
                Choose one of option below
              </Text>
              <View style={styles.checkBox}>
                {/* Цей їбучий чекбокс, це якась хуйня недороблена */}
                <Text style={[globalStyles.gothamBook, styles.radioTitle]}>
                  Fraud or spam
                </Text>
                <CheckBox
                  containerStyle={{}}
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
                      color={colors.UNACTIVE}
                      size={25}
                    />
                  }
                  checked={this.state.checked}
                />
              </View>
              <Divider style={{ backgroundColor: colors.DIVIDER, height: 1 }} />
              <View style={styles.checkBox}>
                <Text style={[globalStyles.gothamBook, styles.radioTitle]}>
                  Unparliamentary language
                </Text>
                <CheckBox
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
                      color={colors.UNACTIVE}
                      size={25}
                    />
                  }
                  checked={this.state.checked}
                />
              </View>
              <Divider style={{ backgroundColor: colors.DIVIDER, height: 1 }} />
              <View style={styles.checkBox}>
                <Text style={[globalStyles.gothamBook, styles.radioTitle]}>
                  Other
                </Text>
                <CheckBox
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
                      color={colors.UNACTIVE}
                      size={25}
                    />
                  }
                  checked={this.state.checked}
                />
              </View>
              <Divider style={{ backgroundColor: colors.DIVIDER, height: 1 }} />
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
