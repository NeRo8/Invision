import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { colors } from '../../../constants/colors';

import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

class ProductWriteMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{}}>
          <Input
            inputStyle={[
              globalStyles.gothamBook,
              {
                fontSize: 17,
                lineHeight: 24,
                backgroundColor: 'white',
                height: 50,
              },
            ]}
            inputContainerStyle={{
              maxWidth: '100%',
              backgroundColor: 'white',
              borderBottomWidth: 0,
            }}
            backgroundColor="white"
            placeholder="Enter your Full name"
          />
          <Input
            inputStyle={[
              globalStyles.gothamBook,
              {
                fontSize: 17,
                lineHeight: 24,
                backgroundColor: 'white',
                height: 50,
              },
            ]}
            inputContainerStyle={{
              maxWidth: '100%',
              backgroundColor: 'white',
              borderBottomWidth: 0,
            }}
            backgroundColor="white"
            placeholder="Enter your email address"
          />
          <Input
            inputStyle={[
              globalStyles.gothamBook,
              {
                fontSize: 17,
                lineHeight: 24,
                backgroundColor: 'white',
                height: 50,
              },
            ]}
            inputContainerStyle={{
              maxWidth: '100%',
              backgroundColor: 'white',
              borderBottomWidth: 0,
            }}
            backgroundColor="white"
            placeholder="Enter description of your question"
          />
        </View>
      </View>
    );
  }
}

export default ProductWriteMessage;
