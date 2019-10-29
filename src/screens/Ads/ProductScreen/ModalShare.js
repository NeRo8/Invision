import React, { Component } from 'react';
import { Modal, View, Text, Image } from 'react-native';

import { Icon, Button } from 'react-native-elements';

import { colors } from '../../../constants/colors';
import styles from './styles';

class ModalShare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal visible={this.props.show} transparent>
        <View style={{ flex: 1, backgroundColor: 'rgba(245,245,245, 0.3)' }}>
          <View
            style={{
              height: '69%',
              marginHorizontal: 11,
              justifyContent: 'space-between',
            }}>
            <View style={{ height: '27%' }}>
              <Image
                style={{ height: '100%', resizeMode: 'cover' }}
                source={require('../../../assets/images/productImages/iphone.jpg')}
              />
              <Text>iPhone X 16Gb</Text>
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <Text>SELECT SOCIAL FOR SHARING</Text>
              <Button
                style={styles.modalButton}
                title="Facebook"
                icon={
                  <Icon
                    containerStyle={{
                      borderRadius: 50,
                      backgroundColor: colors.FACEBOOK,
                    }}
                    name="facebook"
                    type="material-community"
                    color="white"
                  />
                }></Button>

              <Icon
                containerStyle={{
                  borderRadius: 50,
                  backgroundColor: colors.TWITTER,
                }}
                name="twitter"
                type="material-community"
                color="white"
              />
              <Icon
                containerStyle={{
                  borderRadius: 50,
                  backgroundColor: colors.INSTAGRAM,
                }}
                name="instagram"
                type="material-community"
                color="white"
              />
              <Icon
                containerStyle={{
                  borderRadius: 50,
                  backgroundColor: colors.UNACTIVE,
                }}
                name="link-variant"
                type="material-community"
                color="white"
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalShare;
