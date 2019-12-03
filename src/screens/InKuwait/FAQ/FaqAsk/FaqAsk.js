import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

import { colors, globalStyles } from '../../../../constants';
import styles from './styles';

class FaqAsk extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[globalStyles.gothamBold, styles.headerTextTitle]}>
          TELL ABOUT YOUR AD
        </Text>

        <Text style={[globalStyles.gothamBold, styles.textBlock]}>
          ABOUT QUESTION
        </Text>

        <Input
          multiline
          placeholder="Enter your questions"
          placeholderTextColor={colors.LABEL_GREY_COLOR}
          inputStyle={[globalStyles.gothamBook, styles.input]}
          inputContainerStyle={styles.multilineInputContainer}
          containerStyle={styles.inputContainer}
        />

        <View style={styles.blockPicker}>
          <Text style={[globalStyles.gothamBook, styles.text]}>
            Choose your category
          </Text>
          <Icon
            name="chevron-right"
            type="material-community"
            size={32}
            color={colors.LABEL_GREY_COLOR}
          />
        </View>

        <Input
          multiline
          placeholder="Enter description of your question"
          placeholderTextColor={colors.LABEL_GREY_COLOR}
          inputStyle={[globalStyles.gothamBook, styles.input]}
          inputContainerStyle={styles.multilineInputContainer}
          containerStyle={styles.inputContainer}
        />
        <View style={styles.divider} />

        <Text style={[globalStyles.gothamBold, styles.textBlock]}>
          YOUR CONTACT INFO
        </Text>

        <Input
          placeholder="Enter your Full name"
          placeholderTextColor={colors.LABEL_GREY_COLOR}
          inputStyle={[
            globalStyles.gothamBook,
            styles.input,
            { textAlignVertical: 'center' },
          ]}
          inputContainerStyle={[styles.multilineInputContainer, { height: 50 }]}
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder="Enter your email address"
          placeholderTextColor={colors.LABEL_GREY_COLOR}
          inputStyle={[
            globalStyles.gothamBook,
            styles.input,
            { textAlignVertical: 'center' },
          ]}
          inputContainerStyle={[styles.multilineInputContainer, { height: 50 }]}
          containerStyle={styles.inputContainer}
        />
        <Button
          title="Add question"
          titleStyle={[
            globalStyles.gothamBold,
            { fontSize: 15, color: 'white' },
          ]}
          buttonStyle={styles.btnStyle}
          containerStyle={{ marginVertical: 15 }}
        />
      </ScrollView>
    );
  }
}

export default FaqAsk;
