import React, { Component } from 'react';
import { Modal, View, ImageBackground, Text, Switch } from 'react-native';
import { Button } from 'react-native-elements';

import { colors } from '../../constants/colors';
import styles from './styles';

class ModalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal
        style={styles.containerModal}
        visible={this.props.show}
        transparent>
        <View style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              source={require('../../assets/images/element-background.jpg')}
              style={styles.imgBackground}>
              <View style={styles.imgBackgroundTextContainer}>
                <Text style={styles.imgBackText}>
                  Admiration we surrounded possession frequently he.
                </Text>
              </View>
            </ImageBackground>
            <View style={styles.blockAction}>
              <Text style={styles.blockHeader}>SELECT ONE OF ACTION</Text>
              <View>
                <Button
                  icon={{
                    name: 'pencil-outline',
                    type: 'material-community',
                    color: 'white',
                    size: 20,
                    containerStyle: styles.iconBtnLeft,
                  }}
                  title="Edit ad"
                  titleStyle={{ color: colors.HEADER }}
                  buttonStyle={styles.btnStyle}
                />
                <Button
                  icon={{
                    name: 'trash-can-outline',
                    type: 'material-community',
                    color: 'white',
                    size: 20,
                    containerStyle: [
                      styles.iconBtnLeft,
                      { backgroundColor: 'red' },
                    ],
                  }}
                  title="Delete ad"
                  titleStyle={{ color: 'red' }}
                  buttonStyle={styles.btnStyle}
                />
              </View>
            </View>
          </View>
          <View style={styles.blockStatus}>
            <Text style={{ fontSize: 16 }}>Active or inactive</Text>
            <Switch />
          </View>
          <Button
            title="Done"
            titleStyle={{ fontWeight: 'bold' }}
            buttonStyle={styles.btnDoneStyle}
            containerStyle={{ width: '95%', marginBottom: 40 }}
            onPress={() => this.props.showOption(false)}
          />
        </View>
      </Modal>
    );
  }
}

export default ModalProfile;
