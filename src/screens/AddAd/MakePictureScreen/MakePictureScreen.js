import React, { Component } from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';

import { colors } from '../../../constants/colors';

import styles from './styles';

class MakePictureScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardPhoto: false,
    };
  }

  componentDidMount() {
    const variantPhoto = this.props.navigation.getParam('variant');

    if (variantPhoto === 'card') {
      this.setState({
        cardPhoto: true,
      });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 5 }}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}>
            <View style={styles.headerConsole}>
              <Icon
                name="arrow-left"
                type="material-community"
                color={'white'}
              />
              <Icon
                name="flash-off"
                type="material-community"
                color={'white'}
              />
            </View>

            {this.state.cardPhoto ? (
              <View style={{ width: '90%' }}>
                <View style={styles.elementBlock}>
                  <View style={[styles.block, styles.leftTopBlock]} />
                  <View style={[styles.block, styles.rightTopBlock]} />
                </View>
                <View style={[styles.elementBlock, { marginTop: 20 }]}>
                  <View style={[styles.block, styles.leftBottomBlock]} />
                  <View style={[styles.block, styles.rightBottomBlock]} />
                </View>
              </View>
            ) : null}
          </RNCamera>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btnMakePhoto}>
            <View style={styles.insideCircle} />
          </View>
          <Icon
            name="ios-reverse-camera"
            type="ionicon"
            color={'white'}
            size={36}
            containerStyle={{ position: 'absolute', right: 25 }}
          />
        </View>
      </View>
    );
  }
}

export default MakePictureScreen;
