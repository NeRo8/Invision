import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';

import styles from './styles';
import moment from 'moment';

class MakePictureScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardPhoto: false,
      flash: true,
      type: true,
    };
  }

  componentDidMount() {
    const variantPhoto = this.props.navigation.getParam('variant', 'item');

    if (variantPhoto === 'card') {
      this.setState({
        cardPhoto: true,
      });
    }
  }

  takePicture = async () => {
    const { setImageValue } = this.props;
    if (this.camera) {
      const options = { quality: 0.5 };
      const data = await this.camera.takePictureAsync(options);

      const photo = {
        uri: data.uri,
        type: 'image/jpeg',
        name: moment(new Date()).format('YYYYMMDDHHMMSS'),
      };
      setImageValue(photo);
    }
  };

  render() {
    const { flash, type } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 5 }}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            captureAudio={false}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            type={
              type
                ? RNCamera.Constants.Type.back
                : RNCamera.Constants.Type.front
            }
            flashMode={
              flash
                ? RNCamera.Constants.FlashMode.on
                : RNCamera.Constants.FlashMode.off
            }
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}>
            <View style={styles.headerConsole}>
              <Icon
                underlayColor="transparent"
                name="arrow-left"
                type="material-community"
                color={'white'}
                onPress={() => this.props.navigation.goBack()}
              />
              <Icon
                underlayColor="transparent"
                name={flash ? 'flash' : 'flash-off'}
                type="material-community"
                color={'white'}
                onPress={() => this.setState({ flash: !this.state.flash })}
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
          <TouchableOpacity
            style={styles.btnMakePhoto}
            onPress={this.takePicture.bind(this)}>
            <View style={styles.insideCircle} />
          </TouchableOpacity>
          <Icon
            name="ios-reverse-camera"
            type="ionicon"
            color={'white'}
            size={36}
            containerStyle={{ position: 'absolute', right: 25 }}
            onPress={() => this.setState({ type: !this.state.type })}
          />
        </View>
      </View>
    );
  }
}

export default MakePictureScreen;
