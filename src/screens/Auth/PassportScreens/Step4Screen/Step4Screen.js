import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';

import globalStyles from '../../../../constants/globalStyles';
import styles from './styles';
import { colors } from '../../../../constants/colors';

class Step4Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerBlock}>
          <Text style={[globalStyles.gothamBold, styles.headerTitle]}>
            CONTACT DETAILS
          </Text>
          <View style={{ flex: 1 }}>
            <Input
              placeholder="Enter title of ad"
              placeholderTextColor={colors.LABEL_GREY_COLOR}
              inputStyle={[
                globalStyles.gothamBook,
                { fontSize: 17, color: colors.LABEL_GREY_COLOR },
              ]}
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inputContainer}
            />
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.elementPicker}>
                <Text
                  style={[globalStyles.gothamBook, styles.elementPickerText]}>
                  Choose youre city
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
            <Input
              placeholder="Email address"
              placeholderTextColor={colors.LABEL_GREY_COLOR}
              inputStyle={[
                globalStyles.gothamBook,
                { fontSize: 17, color: colors.LABEL_GREY_COLOR },
              ]}
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inputContainer}
            />
            <Input
              placeholder="Contact phone number"
              placeholderTextColor={colors.LABEL_GREY_COLOR}
              inputStyle={[
                globalStyles.gothamBook,
                { fontSize: 17, color: colors.LABEL_GREY_COLOR },
              ]}
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inputContainer}
            />
          </View>
        </View>

        <Button
          title="Continue"
          titleStyle={[globalStyles.gothamBold, styles.btnTitle]}
          buttonStyle={styles.btnStyles}
          onPress={() => this.props.navigation.navigate('StepFive')}
        />
      </View>
    );
  }
}

export default Step4Screen;
