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
import { translate } from '../../i18n';

const ElementCategory = ({ label, count, backgroundImage, onPressElement }) => (
  <TouchableOpacity onPress={() => onPressElement()}>
    <ImageBackground source={backgroundImage} style={styles.elementContainer}>
      <View style={styles.element}>
        <Text style={styles.titleElement}>{label}</Text>
        <View style={styles.roundView}>
          <Text style={styles.roundText}>{count}</Text>
        </View>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

class InKuwaitScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getCountCategory } = this.props;
    this.props.navigation.addListener('didFocus', payload =>
      getCountCategory(),
    );
  }

  render() {
    const { countList, navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
          translucent
        />

        <Text style={styles.headerTitle}>CHOOSE ONE OF CATEGORY</Text>
        <View style={styles.containerBody}>
          <ElementCategory
            label={translate('organizationAndServices')}
            count={countList.services}
            backgroundImage={require('../../assets/images/organisation.jpg')}
            onPressElement={() => navigation.navigate('ServicesNavigation')}
          />
          <ElementCategory
            label={translate('faq')}
            count={countList.faqs}
            backgroundImage={require('../../assets/images/faq.jpg')}
            onPressElement={() => navigation.navigate('FaqNavigation')}
          />
          <ElementCategory
            label={translate('events')}
            count={countList.events}
            backgroundImage={require('../../assets/images/events.jpg')}
            onPressElement={() => navigation.navigate('EventsNavigation')}
          />
          <ElementCategory
            label={translate('news')}
            count={countList.news}
            backgroundImage={require('../../assets/images/news.jpg')}
            onPressElement={() => navigation.navigate('NewsScreen')}
          />
        </View>
      </ScrollView>
    );
  }
}

export default InKuwaitScreen;
