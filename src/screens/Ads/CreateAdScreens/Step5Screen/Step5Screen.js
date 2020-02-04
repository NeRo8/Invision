import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import ModalComplite from './ModalComplite';

import { icons } from '../../../../constants';
import styles from './styles';

class Step5Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  showModalComplite = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
    if (!this.state.showModal === false) {
      this.props.navigation.navigate('StepOne');
      this.props.navigation.navigate('Profile');
    }
  };

  render() {
    const { createNewAd } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerBlock}>
          <Text style={styles.headerTitle}>CHOOSE PACKAGE OF YOUR AD</Text>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => createNewAd()}>
              <View style={styles.card}>
                <LinearGradient
                  colors={['#01DF96', '#00B8B7']}
                  start={{ x: 0.0, y: 0.5 }}
                  end={{ x: 0.8, y: 0.5 }}
                  style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={styles.iconSpeakerContainer}>
                    <Image
                      source={icons.speaker}
                      style={styles.iconContainer}
                      resizeMode={'contain'}
                    />
                  </View>
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={styles.cardText}>FREE AD</Text>

                    <View style={styles.bottomView}>
                      <Text style={styles.smallTextCard}>0 days</Text>
                      <Text style={styles.smallTextCardBold}>0 KWD</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('PremiumPaid');
              }}>
              <View style={styles.card}>
                <LinearGradient
                  colors={['#FFB860', '#FA8B60']}
                  start={{ x: 0.0, y: 0.5 }}
                  end={{ x: 0.8, y: 0.5 }}
                  style={{ flex: 1, flexDirection: 'row' }}>
                  <Image
                    source={icons.advertising}
                    style={{ marginTop: 20, marginLeft: 25 }}
                  />
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={styles.cardText}>PREMIUM PAID</Text>

                    <View style={styles.bottomView}>
                      <Text style={styles.smallTextCard}>7 days</Text>
                      <Text style={styles.smallTextCardBold}>100 KWD</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </TouchableOpacity>
            <Text style={styles.hint}>
              By selecting Post My Ad you agree you've read and accepted our
              Terms of Use and Posting Rules. Please see our Privacy Notice for
              information regarding the processing of your data.
            </Text>
          </View>
        </View>

        <Button
          title="Public my ad"
          titleStyle={styles.btnTitle}
          buttonStyle={styles.btnStyles}
          onPress={() => this.showModalComplite()}
        />
        <ModalComplite
          show={this.state.showModal}
          onClose={this.showModalComplite}
        />
      </View>
    );
  }
}

export default Step5Screen;
