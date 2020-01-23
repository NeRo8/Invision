import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Icon, Button, Divider } from 'react-native-elements';

import Share from 'react-native-share';

import { colors } from '../../../constants';

import styles from './styles';

const ShareElement = ({ icon, title, onPressElement, color }) => (
  <TouchableOpacity
    onPress={() => onPressElement()}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
      height: 50,
    }}>
    {icon}
    <Text style={[{ fontSize: 17, lineHeight: 27 }, { color: color }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

class ShareAd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shareFacebook = socialNetwork => {
    const { description, title } = this.props;

    if (socialNetwork === 'FACEBOOK') {
      const shareOptions = {
        title: title,
        message: description,
        social: Share.Social.FACEBOOK,
        url: 'https://staging.masaha.app/ad/5962/furniture-for-sale-15/',
        failOnCancel: false,
      };
      Share.shareSingle(shareOptions);
    }
    if (socialNetwork === 'INSTAGRAM') {
      const shareOptions = {
        title: title,
        message: description,
        social: Share.Social.INSTAGRAM,
        url: 'https://staging.masaha.app/ad/5962/furniture-for-sale-15/',
        failOnCancel: false,
      };
      Share.shareSingle(shareOptions);
    }
    if (socialNetwork === 'TWITTER') {
      const shareOptions = {
        title: title,
        message: description,
        social: Share.Social.TWITTER,
        url: 'https://staging.masaha.app/ad/5962/furniture-for-sale-15/',
        failOnCancel: false,
      };
      Share.shareSingle(shareOptions);
    }
  };

  render() {
    const { visible, onClose, bgImage, title } = this.props;

    return (
      <Modal visible={visible} transparent>
        <StatusBar backgroundColor="rgba(0,0,0, 0.5)" />
        <View style={styles.container}>
          <View>
            <View>
              <View style={{ height: 178 }}>
                {bgImage !== null ? (
                  <ImageBackground
                    source={{ uri: bgImage.image }}
                    style={styles.bgImage}
                    imageStyle={{
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                    }}>
                    <Text style={styles.titleText}>{title}</Text>
                  </ImageBackground>
                ) : (
                  <ActivityIndicator />
                )}
              </View>

              <View style={styles.bodyContainer}>
                <Text style={styles.headerText}>SELECT SOCIAL FOR SHARING</Text>

                <ShareElement
                  onPressElement={() => this.shareFacebook('FACEBOOK')}
                  icon={
                    <Icon
                      name="facebook"
                      type="material-community"
                      size={20}
                      color="white"
                      containerStyle={[
                        styles.socialIcon,
                        {
                          backgroundColor: colors.FACEBOOK,
                        },
                      ]}
                      underlayColor="transparent"
                    />
                  }
                  title="Facebook"
                  color={colors.FACEBOOK}
                />
                <Divider style={styles.divider} />
                <ShareElement
                  onPressElement={() => this.shareFacebook('TWITTER')}
                  icon={
                    <Icon
                      name="twitter"
                      type="material-community"
                      size={18}
                      color="white"
                      underlayColor="transparent"
                      containerStyle={[
                        styles.socialIcon,
                        {
                          backgroundColor: colors.TWITTER,
                        },
                      ]}
                    />
                  }
                  title="Twitter"
                  color={colors.TWITTER}
                />
                <Divider style={styles.divier} />
                <ShareElement
                  onPressElement={() => this.shareFacebook('INSTAGRAM')}
                  icon={
                    <Icon
                      name="instagram"
                      type="material-community"
                      size={18}
                      color="white"
                      underlayColor="transparent"
                      containerStyle={[
                        styles.socialIcon,
                        {
                          backgroundColor: colors.INSTAGRAM,
                        },
                      ]}
                    />
                  }
                  title="Instagram"
                  color={colors.INSTAGRAM}
                />
                <Divider style={styles.divider} />
                <ShareElement
                  icon={
                    <Icon
                      name="link-variant"
                      type="material-community"
                      size={18}
                      color="white"
                      underlayColor="transparent"
                      containerStyle={[
                        styles.socialIcon,
                        {
                          backgroundColor: colors.LINK,
                        },
                      ]}
                    />
                  }
                  title="Copy link"
                  color={colors.LINK}
                />
              </View>
            </View>
            <Button
              title="Cancel"
              titleStyle={styles.btnTitle}
              buttonStyle={styles.btnStyle}
              containerStyle={{ marginVertical: 20 }}
              onPress={() => onClose()}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default ShareAd;
