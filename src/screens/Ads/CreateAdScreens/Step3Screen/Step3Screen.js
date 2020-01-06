import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import styles from './styles';

class Step3Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { image, navigation } = this.props;
    return (
      <View style={[styles.container, { paddingHorizontal: 0 }]}>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>ADD PHOTOS</Text>
          <FlatList
            data={image}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.element}>
                <Image
                  source={{ uri: item.uri }}
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
            onPress={() => navigation.navigate('StepFour')}
          />
        </View>
      </View>
    );
  }
}

export default Step3Screen;
