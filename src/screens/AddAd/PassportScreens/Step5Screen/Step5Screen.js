import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../../../constants/globalStyles';
import styles from './styles';

class Step5Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerBlock}>
          <Text style={[globalStyles.gothamBold, styles.headerTitle]}>
            CHOOSE PACKAGE OF YOUR AD
          </Text>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.card}>
                <LinearGradient
                  colors={['#01DF96', '#00B8B7']}
                  start={{ x: 0.0, y: 0.5 }}
                  end={{ x: 0.8, y: 0.5 }}
                  style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={styles.iconSpeakerContainer}>
                    <Image
                      source={require('../../../../assets/icons/speaker.png')}
                      style={styles.iconContainer}
                      resizeMode={'contain'}
                    />
                  </View>
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={[globalStyles.gothamBold, styles.cardText]}>
                      FREE AD
                    </Text>

                    <View style={styles.bottomView}>
                      <Text
                        style={[globalStyles.gothamBook, styles.smallTextCard]}>
                        0 days
                      </Text>
                      <Text
                        style={[
                          globalStyles.gothamBold,
                          styles.smallTextCardBold,
                        ]}>
                        0 KWD
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Pay');
              }}>
              <View style={styles.card}>
                <LinearGradient
                  colors={['#FFB860', '#FA8B60']}
                  start={{ x: 0.0, y: 0.5 }}
                  end={{ x: 0.8, y: 0.5 }}
                  style={{ flex: 1, flexDirection: 'row' }}>
                  <Image
                    source={require('../../../../assets/icons/advertising.png')}
                    style={{ marginTop: 20, marginLeft: 25 }}
                  />
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={[globalStyles.gothamBold, styles.cardText]}>
                      PREMIUM PAID
                    </Text>

                    <View style={styles.bottomView}>
                      <Text
                        style={[globalStyles.gothamBook, styles.smallTextCard]}>
                        7 days
                      </Text>
                      <Text
                        style={[
                          globalStyles.gothamBold,
                          styles.smallTextCardBold,
                        ]}>
                        100 KWD
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </TouchableOpacity>
            <Text style={[globalStyles.gothamBook, styles.hint]}>
              By selecting Post My Ad you agree you've read and accepted our
              Terms of Use and Posting Rules. Please see our Privacy Notice for
              information regarding the processing of your data.
            </Text>
          </View>
        </View>

        <Button
          title="Public my ad"
          titleStyle={[globalStyles.gothamBold, styles.btnTitle]}
          buttonStyle={styles.btnStyles}
          onPress={() => this.props.navigation.navigate('StepFive')}
        />
      </View>
    );
  }
}

export default Step5Screen;
