import React, { Component } from 'react';
import { Modal, View, Text } from 'react-native';

import { Button, Divider, CheckBox, Icon } from 'react-native-elements';

import { colors, globalStyles } from '../../../constants';

import styles from './styles';

class ComplainModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fraud: false,
      language: false,
      other: false,
    };
  }

  check = option => {
    this.setState({ fraud: false, language: false, other: false });
    this.setState({ [option]: true });
  };

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
                onPress={() => this.check('fraud')}
                iconRight
                title={'Fraud or scam'}
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
                checked={this.state.fraud}
              />

              <Divider style={{ backgroundColor: colors.DIVIDER, height: 1 }} />

              <CheckBox
                onPress={() => this.check('language')}
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
                checked={this.state.language}
              />
              <Divider style={{ backgroundColor: colors.DIVIDER, height: 1 }} />

              <CheckBox
                onPress={() => this.check('other')}
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
                checked={this.state.other}
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
