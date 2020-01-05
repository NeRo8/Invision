import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, CheckBox, Input, Button } from 'react-native-elements';

import { colors, globalStyles } from '../../../../constants';

import styles from './styles';

class Step1Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Text style={[globalStyles.gothamBold, styles.headerTitle]}>
            MAIN INFORMATION
          </Text>

          <View>
            <Text style={[globalStyles.gothamBold, styles.underTitle]}>
              WHAT DO YOU WANT TO SELL?
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ChooseCategory')}>
              <View style={styles.elementPicker}>
                <Text
                  style={[globalStyles.gothamBook, styles.elementPickerText]}>
                  Choose category
                </Text>
                <Icon
                  name="chevron-right"
                  type="material-community"
                  size={24}
                  color={'#74859E'}
                  containerStyle={{}}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.elementPicker, { paddingLeft: 0 }]}>
              <Input
                leftIcon={{
                  name: 'cash-multiple',
                  type: 'material-community',
                  color: colors.HEADER,
                  containerStyle: { marginRight: 10 },
                }}
                placeholder="Price"
                inputStyle={[
                  [globalStyles.gothamBook, styles.elementPickerText],
                ]}
                inputContainerStyle={{
                  paddingHorizontal: 0,
                  borderBottomWidth: 0,
                }}
                containerStyle={{
                  flex: 1,
                  paddingHorizontal: 0,
                }}
              />

              <Text
                style={[
                  globalStyles.gothamBook,
                  styles.elementPickerText,
                  { color: colors.TITLE },
                ]}>
                KWD
              </Text>
            </View>
          </View>

          <View>
            <Text style={[globalStyles.gothamBold, styles.underTitle]}>
              CHOOSE TYPE SELLER
            </Text>
            <View style={styles.elementCheck}>
              <CheckBox
                checked
                iconType="ionicon"
                checkedIcon="ios-checkmark-circle"
                uncheckedIcon="ios-checkmark-circle-outline"
                checkedColor={colors.HEADER}
                title="Private"
                textStyle={[
                  globalStyles.gothamBook,
                  styles.elementPickerText,
                  { fontWeight: '100', color: 'black' },
                ]}
                containerStyle={styles.checkmark}
              />
              <CheckBox
                iconType="ionicon"
                checkedIcon="ios-checkmark-circle"
                uncheckedIcon="ios-checkmark-circle-outline"
                checkedColor={colors.HEADER}
                title="Businnes"
                textStyle={[
                  globalStyles.gothamBook,
                  styles.elementPickerText,
                  { fontWeight: '100', color: 'black' },
                ]}
                containerStyle={styles.checkmark}
              />
            </View>
          </View>

          <View>
            <Text style={[globalStyles.gothamBold, styles.underTitle]}>
              {'What is the state of your product?'.toUpperCase()}
            </Text>
            <View style={styles.elementCheck}>
              <CheckBox
                checked
                iconType="ionicon"
                checkedIcon="ios-checkmark-circle"
                uncheckedIcon="ios-checkmark-circle-outline"
                checkedColor={colors.HEADER}
                title="New"
                textStyle={[
                  globalStyles.gothamBook,
                  styles.elementPickerText,
                  { fontWeight: '100', color: 'black' },
                ]}
                containerStyle={styles.checkmark}
              />
              <CheckBox
                iconType="ionicon"
                checkedIcon="ios-checkmark-circle"
                uncheckedIcon="ios-checkmark-circle-outline"
                checkedColor={colors.HEADER}
                title="Used"
                textStyle={[
                  globalStyles.gothamBook,
                  styles.elementPickerText,
                  { fontWeight: '100', color: 'black' },
                ]}
                containerStyle={styles.checkmark}
              />
            </View>
          </View>
        </ScrollView>
        <Button
          title="Continue"
          titleStyle={[globalStyles.gothamBold, styles.btnTitle]}
          buttonStyle={styles.btnStyles}
          onPress={() => this.props.navigation.navigate('StepTwo')}
        />
      </View>
    );
  }
}

export default Step1Screen;
