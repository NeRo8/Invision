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
                onPress={this.props.onPressClose}
              />
            </View>
            <View style={styles.modalWraper}>
              <Text style={[globalStyles.gothamMediumRegular, styles.WhatHapp]}>
                What happens?
              </Text>
              <Text style={[globalStyles.gothamBook, styles.Choose]}>
                Choose one of option below
              </Text>

              <CheckBox
                iconRight
                title={'Fraud or spam'}
                textStyle={[globalStyles.gothamBook, styles.radioTitle]}
                containerStyle={styles.checkBox}
                wrapperStyle={styles.checkBoxWraper}
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
                    iconStyle={{ alignSelf: 'flex-end' }}
                    name="radiobox-blank"
                    type="material-community"
                    color={colors.UNACTIVE}
                    size={25}
                  />
                }
                checked={this.state.checked}
              />

              <Divider style={{ backgroundColor: colors.DIVIDER, height: 1 }} />

              <CheckBox
                iconRight
                title={'Unparliamentary language'}
                textStyle={[globalStyles.gothamBook, styles.radioTitle]}
                containerStyle={styles.checkBox}
                wrapperStyle={styles.checkBoxWraper}
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
                    iconStyle={{ alignSelf: 'flex-end' }}
                    name="radiobox-blank"
                    type="material-community"
                    color={colors.UNACTIVE}
                    size={25}
                  />
                }
                checked={this.state.checked}
              />
              <Divider style={{ backgroundColor: colors.DIVIDER, height: 1 }} />

              <CheckBox
                iconRight
                title={'Other'}
                textStyle={[globalStyles.gothamBook, styles.radioTitle]}
                containerStyle={styles.checkBox}
                wrapperStyle={styles.checkBoxWraper}
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
                    iconStyle={{ alignSelf: 'flex-end' }}
                    name="radiobox-blank"
                    type="material-community"
                    color={colors.UNACTIVE}
                    size={25}
                  />
                }
                checked={this.state.checked}
              />

              <Divider style={{ backgroundColor: colors.DIVIDER, height: 1 }} />
              <Button
                titleStyle={[
                  globalStyles.gothamBold,
                  { color: 'white', fontSize: 15, lineHeight: 24 },
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
