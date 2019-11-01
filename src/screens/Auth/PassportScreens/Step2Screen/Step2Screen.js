import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

import globalStyles from '../../../../constants/globalStyles';
import styles from './styles';

class Step2Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[globalStyles.gothamBold, styles.headerTitle]}>
          TELL ABOUT YOUR AD
        </Text>

        <View style={{ flex: 1 }}>
          <Text style={[globalStyles.gothamBold, styles.underTitle]}>
            TITLE AND DESCRIPTION
          </Text>
          <Input
            placeholder="Enter title of ad"
            inputStyle={[globalStyles.gothamBook, { fontSize: 17 }]}
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.inputContainer}
          />
          <Input
            multiline
            placeholder="Enter description of ad"
            inputStyle={[globalStyles.gothamBook, { fontSize: 17 }]}
            inputContainerStyle={styles.inputMultiContainerStyle}
            containerStyle={styles.inputMultiContainer}
          />
        </View>

        <Button
          title="Continue"
          titleStyle={[globalStyles.gothamBold, styles.btnTitle]}
          buttonStyle={styles.btnStyles}
          onPress={() => this.props.navigation.navigate('StepThree')}
        />
      </View>
    );
  }
}

export default Step2Screen;
