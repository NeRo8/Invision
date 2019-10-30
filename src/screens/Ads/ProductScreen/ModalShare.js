import React, { Component } from 'react';
import { Modal, View, Text, ImageBackground } from 'react-native';

import { Icon, Button, Divider } from 'react-native-elements';

import { colors } from '../../../constants/colors';
import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

class ModalShare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal visible={this.props.show} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0, 0.5)',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              marginHorizontal: 11,
              marginBottom: 15,
            }}>
            <View>
              <View style={{ height: 178 }}>
                <ImageBackground
                  source={require('../../../assets/images/productImages/iphone.jpg')}
                  style={styles.shareBackgroundImage}
                  imageStyle={{
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}>
                  <Text
                    style={[
                      globalStyles.gothamBook,
                      styles.title,
                      { color: 'white', marginBottom: 15, marginLeft: 25 },
                    ]}>
                    iPhone X 16Gb
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.shareSelectSocialView}>
                <Text
                  style={[globalStyles.gothamBold, styles.selectSocialText]}>
                  SELECT SOCIAL FOR SHARING
                </Text>

                <Button
                  titleStyle={[
                    globalStyles.gothamBook,
                    { color: colors.FACEBOOK, fontSize: 17, lineHeight: 27 },
                  ]}
                  buttonStyle={styles.modalButton}
                  title="Facebook"
                  icon={
                    <Icon
                      size={15}
                      containerStyle={[
                        styles.modalButtonIconContainer,
                        { backgroundColor: colors.FACEBOOK },
                      ]}
                      name="facebook"
                      type="material-community"
                      color="white"
                    />
                  }
                />
                <Divider
                  style={{ backgroundColor: colors.DIVIDER, height: 1 }}
                />
                <Button
                  titleStyle={[
                    globalStyles.gothamBook,
                    { color: colors.TWITTER, fontSize: 17, lineHeight: 27 },
                  ]}
                  buttonStyle={styles.modalButton}
                  title="Twitter"
                  icon={
                    <Icon
                      size={15}
                      containerStyle={[
                        styles.modalButtonIconContainer,
                        { backgroundColor: colors.TWITTER },
                      ]}
                      name="twitter"
                      type="material-community"
                      color="white"
                    />
                  }
                />
                <Divider
                  style={{ backgroundColor: colors.DIVIDER, height: 1 }}
                />
                <Button
                  titleStyle={[
                    globalStyles.gothamBook,
                    { color: colors.INSTAGRAM, fontSize: 17, lineHeight: 27 },
                  ]}
                  buttonStyle={styles.modalButton}
                  title="Instagram"
                  icon={
                    <Icon
                      size={15}
                      containerStyle={[
                        styles.modalButtonIconContainer,
                        { backgroundColor: colors.INSTAGRAM },
                      ]}
                      name="instagram"
                      type="material-community"
                      color="white"
                    />
                  }
                />
                <Divider
                  style={{ backgroundColor: colors.DIVIDER, height: 1 }}
                />
                <Button
                  titleStyle={[
                    globalStyles.gothamBook,
                    { color: '#34465F', fontSize: 17, lineHeight: 27 },
                  ]}
                  buttonStyle={[styles.modalButton, { marginBottom: 6 }]}
                  title="Copy link"
                  icon={
                    <Icon
                      size={15}
                      containerStyle={[
                        styles.modalButtonIconContainer,
                        { backgroundColor: '#34465F' },
                      ]}
                      name="link-variant"
                      type="material-community"
                      color="white"
                    />
                  }
                />
              </View>
            </View>
            <Button
              titleStyle={[
                globalStyles.gothamBold,
                { color: colors.HEADER, fontSize: 17, lineHeight: 23 },
              ]}
              buttonStyle={styles.buttonCancel}
              title="Cancel"
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalShare;
