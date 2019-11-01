import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';

import styles from './styles';

class InKuwaitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
          translucent
        />
        <Text style={styles.headerTitle}>CHOOSE ONE OF CATEGORY</Text>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => {}}>
            <ImageBackground
              source={require('../../assets/images/organisation.jpg')}
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
              source={require('../../assets/images/faq.jpg')}
              style={styles.elementContainer}>
              <View style={styles.element}>
                <Text style={styles.titleElement}>{'FAQ'}</Text>
                <View style={styles.roundView}>
                  <Text style={styles.roundText}>55</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('EventsNavigation')}>
            <ImageBackground
              source={require('../../assets/images/events.jpg')}
              style={styles.elementContainer}>
              <View style={styles.element}>
                <Text style={styles.titleElement}>{'Events'}</Text>
                <View style={styles.roundView}>
                  <Text style={styles.roundText}>55</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('InKuwaitNews');
            }}>
            <ImageBackground
              source={require('../../assets/images/news.jpg')}
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
      </ScrollView>
    );
  }
}

export default InKuwaitScreen;
