import React, { Component } from 'react';
import { Modal, View, ImageBackground, Text, Switch } from 'react-native';
import { Button } from 'react-native-elements';

import globalStyles from '../../constants/globalStyles';
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
                <Text
                  style={[
                    globalStyles.gothamMediumRegular,
                    styles.imgBackText,
                  ]}>
                  Admiration we surrounded possession frequently he.
                </Text>
              </View>
            </ImageBackground>
            <View style={styles.blockAction}>
              <Text style={[globalStyles.gothamBold, styles.blockHeader]}>
                SELECT ONE OF ACTION
              </Text>
              <View>
                <Button
                  icon={{
                    name: 'pencil-outline',
                    type: 'material-community',
                    color: 'white',
                    size: 16,
                    containerStyle: styles.iconBtnLeft,
                  }}
                  title="Edit ad"
                  titleStyle={[
                    globalStyles.gothamBook,
                    { color: colors.HEADER, fontSize: 17 },
                  ]}
                  buttonStyle={styles.btnStyle}
                />
                <Button
                  icon={{
                    name: 'trash-can-outline',
                    type: 'material-community',
                    color: 'white',
                    size: 16,
                    containerStyle: [
                      styles.iconBtnLeft,
                      { backgroundColor: 'red' },
                    ],
                  }}
                  title="Delete ad"
                  titleStyle={[
                    globalStyles.gothamBook,
                    { color: 'red', fontSize: 17 },
                  ]}
                  buttonStyle={styles.btnStyle}
                />
              </View>
            </View>
          </View>
          <View style={styles.blockStatus}>
            <Text style={[globalStyles.gothamBook, { fontSize: 17 }]}>
              Active or inactive
            </Text>
            <Switch />
          </View>
          <Button
            title="Done"
            titleStyle={[
              globalStyles.gothamBold,
              { fontSize: 17, color: 'white' },
            ]}
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
