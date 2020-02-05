import React, { Component } from 'react';
import { View, Text, FlatList, Image, Platform, Alert } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import styles from './styles';

class Step3Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressContinue = () => {
    const { images, navigation } = this.props;
    if (images.length === 0) {
      Alert.alert('Please add some images, before continue.');
    } else {
      navigation.navigate('StepFive');
    }
  };

  render() {
    const { images, navigation } = this.props;
    return (
      <View style={[styles.container, { paddingHorizontal: 0 }]}>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>ADD PHOTOS</Text>
          <FlatList
            data={images}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.element}>
                <Image
                  source={{
                    uri:
                      Platform.OS === 'android'
                        ? item.uri
                        : item.uri.replace('/Users', 'file:///Users'),
                  }}
                  style={{ flex: 1, width: null, height: null }}
                  resizeMode="center"
                />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View>
          <Icon
            name="ios-camera"
            type="ionicon"
            color="white"
            underlayColor="transparent"
            size={32}
            containerStyle={styles.iconCamera}
            onPress={() => {
              navigation.navigate('MakePicture');
            }}
          />
          <Button
            title="Continue"
            titleStyle={styles.btnTitle}
            buttonStyle={styles.btnStyles}
            onPress={this.handlePressContinue}
          />
        </View>
      </View>
    );
  }
}

export default Step3Screen;
