import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Icon, Button, Divider } from 'react-native-elements';

import Share from 'react-native-share';

import { colors, globalStyles } from '../../constants';

import styles from './styles';

const ShareElement = ({ icon, title, onPress, color }) => (
  <TouchableOpacity
    onPress={() => {}}
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

class ShareModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { visible, onClose, bgImage } = this.props;

    return (
      <Modal visible={visible} transparent>
        <StatusBar backgroundColor="rgba(0,0,0, 0.5)" />
        <View style={styles.container}>
          <View>
            <View>
              <View style={{ height: 178 }}>
                <ImageBackground
                  source={bgImage}
                  style={styles.bgImage}
                  imageStyle={{
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  }}>
                  <Text style={styles.titleText}>iPhone X 16Gb</Text>
                </ImageBackground>
              </View>

              <View style={styles.bodyContainer}>
                <Text style={styles.headerText}>SELECT SOCIAL FOR SHARING</Text>

                <ShareElement
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
                    />
                  }
                  title="Facebook"
                  color={colors.FACEBOOK}
                />
                <Divider style={styles.divider} />
                <ShareElement
                  icon={
                    <Icon
                      name="twitter"
                      type="material-community"
                      size={18}
                      color="white"
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
                  icon={
                    <Icon
                      name="instagram"
                      type="material-community"
                      size={18}
                      color="white"
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

export default ShareModal;
