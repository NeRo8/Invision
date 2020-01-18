import React, { Component } from 'react';
import { Modal, View, Text } from 'react-native';

import { Divider, CheckBox, Icon } from 'react-native-elements';

import { DefaultButton } from '../../components/Buttons';

import { colors } from '../../constants';

import styles from './styles';

class ReportModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fraud: false,
      language: false,
      other: false,
      message: '',
    };
  }
  check = option => {
    this.setState({
      fraud: false,
      language: false,
      other: false,
      [option]: true,
      message: option,
    });
  };

  onPressSend = () => {
    const { setReportData, idForReport } = this.props;
    const { message } = this.state;

    setReportData(idForReport, message);
  };

  render() {
    const { onPressClose } = this.props;
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
              <Text style={styles.whatHapp}>What happens?</Text>
              <Text style={styles.choose}>Choose one of option below</Text>

              <CheckBox
                onPress={() => this.check('fraud')}
                iconRight
                title={'Fraud or scam'}
                textStyle={styles.radioTitle}
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
                textStyle={styles.radioTitle}
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
                textStyle={styles.radioTitle}
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
              <DefaultButton
                title="Send"
                buttonContainer={styles.buttonContainer}
                onPress={this.onPressSend}
                onPressOut={() => onPressClose()}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ReportModal;
