import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';

import styles from './styles';
import ModalComplite from './ModalComplite';

class PayCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  onShowModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
    if (!this.state.showModal === false) {
      this.props.navigation.navigate('Profile');
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.container, { paddingHorizontal: 15 }]}>
          <View style={styles.cardView}>
            <Icon
              name="ios-camera"
              type="ionicon"
              color="white"
              underlayColor="transparent"
              size={48}
              containerStyle={styles.iconContainer}
              onPress={() => {
                this.props.navigation.navigate('MakePicture', {
                  variant: 'card',
                });
              }}
            />
            <Text style={styles.textHint}>Take a photo of your card</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Input
              placeholder="Credit card number"
              inputStyle={styles.inputRowStyle}
              inputContainerStyle={styles.inputRowCStyle}
              containerStyle={styles.inputContainer}
            />
            <View style={{ flexDirection: 'row' }}>
              <Input
                placeholder="4584"
                inputStyle={styles.inputRowStyle}
                inputContainerStyle={styles.inputRowCStyle}
                containerStyle={styles.inputRowContainer}
              />
              <Input
                placeholder="09/20"
                inputContainerStyle={styles.inputRowCStyle}
                inputStyle={styles.inputRowStyle}
                containerStyle={styles.inputRowContainer}
              />
              <Input
                placeholder="2021"
                inputStyle={styles.inputRowStyle}
                inputContainerStyle={styles.inputRowCStyle}
                containerStyle={styles.inputRowContainer}
              />
            </View>
            <Input
              placeholder="CVC/CVV"
              inputStyle={styles.inputRowStyle}
              inputContainerStyle={styles.inputRowCStyle}
              containerStyle={styles.inputContainer}
            />
          </View>
        </View>
        <Button
          title="BUY AD (150 KWD)"
          titleStyle={styles.btnTitle}
          buttonStyle={styles.btnStyle}
          onPress={() => this.onShowModal()}
        />
        <ModalComplite show={this.state.showModal} onClose={this.onShowModal} />
      </ScrollView>
    );
  }
}

export default PayCardScreen;
