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
    const { title, description, setValue } = this.props;

    return (
      <View style={[styles.container, { paddingHorizontal: 0 }]}>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>TELL ABOUT YOUR AD</Text>

          <View style={{ flex: 1 }}>
            <Text style={styles.underTitle}>TITLE AND DESCRIPTION</Text>
            <Input
              placeholder="Enter title of ad"
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.inputContainer}
              value={title}
              onChangeText={value => setValue('title', value)}
            />
            <Input
              multiline
              placeholder="Enter description of ad"
              inputStyle={styles.inputStyleMultiline}
              inputContainerStyle={styles.inputMultiContainerStyle}
              containerStyle={styles.inputMultiContainer}
              value={description}
              onChangeText={value => setValue('description', value)}
            />
          </View>
        </View>
        <Button
          title="Continue"
          titleStyle={styles.btnTitle}
          buttonStyle={styles.btnStyles}
          onPress={() => this.props.navigation.navigate('StepThree')}
        />
      </View>
    );
  }
}

export default Step2Screen;
