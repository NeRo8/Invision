import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import styles from './styles';

class InKuwaitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>CHOOSE ONE OF CATEGORY</Text>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => {}}>
            <ImageBackground
              source={require('../../assets/images/element-background.jpg')}
              style={styles.elementContainer}>
              <View style={styles.element}>
                <Text style={styles.titleElement}>
                  {'Organisation \n & services'}
                </Text>
                <View style={styles.roundView}>
                  <Text style={styles.roundText}>200</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('InKuwaitFAQ')}>
            <ImageBackground
              source={require('../../assets/images/element-background.jpg')}
              style={styles.elementContainer}>
              <View style={styles.element}>
                <Text style={styles.titleElement}>{'FAQ'}</Text>
                <View style={styles.roundView}>
                  <Text style={styles.roundText}>55</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <ImageBackground
              source={require('../../assets/images/element-background.jpg')}
              style={styles.elementContainer}>
              <View style={styles.element}>
                <Text style={styles.titleElement}>{'Events'}</Text>
                <View style={styles.roundView}>
                  <Text style={styles.roundText}>55</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <ImageBackground
              source={require('../../assets/images/element-background.jpg')}
              style={styles.elementContainer}>
              <View style={styles.element}>
                <Text style={styles.titleElement}>{'News'}</Text>
                <View style={styles.roundView}>
                  <Text style={styles.roundText}>44</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default InKuwaitScreen;
