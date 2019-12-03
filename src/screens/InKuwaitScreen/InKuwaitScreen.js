import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import { getCountList } from '../../redux/actions/inKuwaitAction';

import styles from './styles';

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
    this.props.getCountCategory();
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
            label={'Organisation \n & services'}
            count={countList.services}
            backgroundImage={require('../../assets/images/organisation.jpg')}
            onPressElement={() => navigation.navigate('ServicesNavigation')}
          />
          <ElementCategory
            label="FAQ"
            count={countList.faqs}
            backgroundImage={require('../../assets/images/faq.jpg')}
            onPressElement={() => navigation.navigate('FaqNavigation')}
          />
          <ElementCategory
            label="Events"
            count={countList.events}
            backgroundImage={require('../../assets/images/events.jpg')}
            onPressElement={() => navigation.navigate('EventsNavigation')}
          />
          <ElementCategory
            label="News"
            count={countList.news}
            backgroundImage={require('../../assets/images/news.jpg')}
            onPressElement={() => navigation.navigate('NewsScreen')}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    countList: state.inKuwait.countList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCountCategory: () => {
      dispatch(getCountList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InKuwaitScreen);
