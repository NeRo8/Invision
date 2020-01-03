import React, { Component } from 'react';
import { Modal, View, ImageBackground, Text, Switch } from 'react-native';
import { Button } from 'react-native-elements';

import { colors, globalStyles } from '../../../constants';

import styles from './styles';

class ProfileAdsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressDelete = () => {
    const { item, token, deleteAd } = this.props;

    deleteAd(item.pk, token);
  };

  render() {
    const { item, show, showOption } = this.props;

    return (
      <Modal style={styles.containerModal} visible={show} transparent>
        <View style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              source={{ uri: item.primary_image }}
              style={styles.imgBackground}>
              <View style={styles.imgBackgroundTextContainer}>
                <Text style={styles.imgBackText}>{item.title}</Text>
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
                  onPress={this.handlePressDelete}
                />
              </View>
            </View>
          </View>
          <View style={styles.blockStatus}>
            <Text style={styles.labelSwitcher}>Active or inactive</Text>
            <Switch />
          </View>
          <Button
            title="Done"
            titleStyle={styles.btnTitle}
            buttonStyle={styles.btnDoneStyle}
            containerStyle={styles.btnContainer}
            onPress={() => showOption(false, null)}
          />
        </View>
      </Modal>
    );
  }
}

export default ProfileAdsModal;
