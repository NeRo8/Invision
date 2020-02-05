import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';

import { CreateAdInput } from '../../../../components/Inputs';

import styles from './styles';

class Step2Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressContinue = () => {
    const { navigation, title, description } = this.props;

    if (title === null || description === null) {
      Alert.alert('Please fill required fields, before continue.');
    } else {
      navigation.navigate('StepThree');
    }
  };

  render() {
    const { title, description, setValue } = this.props;
    return (
      <KeyboardAvoidingScrollView
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        stickyFooter={
          <Button
            title="Continue"
            titleStyle={styles.btnTitle}
            buttonStyle={styles.btnStyles}
            onPress={this.handlePressContinue}
          />
        }>
        <Text style={styles.headerTitle}>TELL ABOUT YOUR AD</Text>

        <View style={{ flex: 1 }}>
          <Text style={styles.underTitle}>TITLE AND DESCRIPTION</Text>
          <CreateAdInput
            placeholder="Enter title of ad"
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
      </KeyboardAvoidingScrollView>
    );
  }
}

export default Step2Screen;
