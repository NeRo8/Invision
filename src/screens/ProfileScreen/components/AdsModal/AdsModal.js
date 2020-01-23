import React, { Component } from 'react';
import { Modal, View, ImageBackground, Text, Switch } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

class AdsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adStatus: null,
    };
  }

  componentDidMount() {
    const { adStatus } = this.props;
    this.setState({
      adStatus: adStatus,
    });
  }

  handlePressDelete = () => {
    const { item, deleteAd } = this.props;

    deleteAd(item.pk);
  };

  onChangeState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handlePressDone = () => {
    const { onClose, updateAdStatus, item } = this.props;
    const { adStatus } = this.state;

    updateAdStatus(item.pk, adStatus);
    onClose();
  };

  render() {
    const { adStatus } = this.state;
    const { item, show } = this.props;

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
                  titleStyle={styles.titleStyle}
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
                  titleStyle={[styles.titleStyle, { color: 'red' }]}
                  buttonStyle={styles.btnStyle}
                  onPress={this.handlePressDelete}
                />
              </View>
            </View>
          </View>
          <View style={styles.blockStatus}>
            <Text style={styles.labelSwitcher}>Active or inactive</Text>
            <Switch
              value={adStatus === 'active' ? true : false}
              onValueChange={() =>
                this.onChangeState(
                  'adStatus',
                  adStatus === 'active' ? 'inactive' : 'active',
                )
              }
            />
          </View>
          <Button
            title="Done"
            titleStyle={styles.btnTitle}
            buttonStyle={styles.btnDoneStyle}
            containerStyle={styles.btnContainer}
            onPress={this.handlePressDone}
          />
        </View>
      </Modal>
    );
  }
}

export default AdsModal;
