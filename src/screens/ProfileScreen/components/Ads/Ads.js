import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Grayscale } from 'react-native-color-matrix-image-filters';

import AdsModal from '../AdsModal';

import styles from './styles';
import moment from 'moment';

class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handlePressDone = () => {
    this.setState({
      showModal: false,
    });
  };

  handlePressDots = () => {
    this.setState({
      showModal: true,
    });
  };

  render() {
    const { showModal } = this.state;
    const { element } = this.props;
    return (
      <ImageBackground
        style={styles.elementContainer}
        source={{ uri: element.primary_image }}>
        <View style={styles.container}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{
                marginLeft: 40,
                flex: 1,
                paddingTop: 25,
              }}>
              <Text style={styles.fontDescription}>
                {element.description.slice(0, 250)}
              </Text>
            </View>
            <View
              style={{
                marginRight: 25,
                marginTop: 36,
                marginLeft: 25,
              }}>
              <Icon
                name="dots-vertical"
                type="material-community"
                containerStyle={styles.iconDots}
                underlayColor="transparent"
                onPress={this.handlePressDots}
              />
            </View>
          </View>
          <View style={styles.bottomBlock}>
            <Text style={styles.label}>
              {`${element.price} ${element.currency.toUpperCase()}`}
            </Text>
            <Text style={styles.label}>
              {moment(element.publish_date).format('DD.MM.YY')}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.label}>{element.message_count}</Text>
              <Icon
                name="ios-mail"
                type="ionicon"
                color="silver"
                underlayColor="transparent"
                containerStyle={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>
        <AdsModal
          item={element}
          show={showModal}
          onClose={this.handlePressDone}
        />
      </ImageBackground>
    );
  }
}

class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item, grayscale } = this.props;

    if (grayscale === 'inactive') {
      return (
        <Grayscale style={{ flex: 1 }}>
          <Element element={item} />
        </Grayscale>
      );
    }

    return <Element element={item} />;
  }
}

export default Ads;
