import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import globalStyles from '../../../../constants/globalStyles';
import styles from './styles';

class Step3Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 0, url: 'title' },
        { id: 1, url: 'title' },
        { id: 2, url: 'title' },
        { id: 3, url: 'title' },
        { id: 4, url: 'title' },
        { id: 5, url: 'title' },
        { id: 3, url: 'title' },
        { id: 4, url: 'title' },
        { id: 3, url: 'title' },
        { id: 4, url: 'title' },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[globalStyles.gothamBold, styles.headerTitle]}>
          ADD PHOTOS
        </Text>

        <FlatList
          data={this.state.data}
          numColumns={2}
          renderItem={item => (
            <View style={styles.element}>
              <Image
                source={require('../../../../assets/icons/empty_image.png')}
              />
            </View>
          )}
        />
        <View>
          <Icon
            name="ios-camera"
            type="ionicon"
            color="white"
            size={32}
            containerStyle={styles.iconCamera}
            onPress={() => {}}
          />
          <Button
            title="Continue"
            titleStyle={[globalStyles.gothamBold, styles.btnTitle]}
            buttonStyle={styles.btnStyles}
            onPress={() => this.props.navigation.navigate('StepFour')}
          />
        </View>
      </View>
    );
  }
}

export default Step3Screen;
