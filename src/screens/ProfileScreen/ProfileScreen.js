import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Button } from 'react-native-elements';
import { Grayscale } from 'react-native-color-matrix-image-filters';

import ModalProfile from '../../components/ModalProfile';
import TextPicker from '../../components/TextPicker';

import { colors, globalStyles } from '../../constants';

import styles from './styles';

const ElementFL = ({ item, showOption, grayscale }) => {
  if (grayscale) {
    return (
      <Grayscale style={{ flex: 1 }}>
        <ImageBackground
          style={styles.elementContainer}
          source={require('../../assets/images/background-phone.jpg')}>
          <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View
                style={{
                  marginLeft: 40,
                  flex: 1,
                  paddingTop: 25,
                }}>
                <Text
                  style={[
                    globalStyles.gothamMediumRegular,
                    styles.fontDescription,
                  ]}>
                  Whole every miles as tiled at seven or. Wished he entire
                  esteem mr oh by.
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
                  onPress={() => showOption(true)}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: 44,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={[globalStyles.gothamBook]}>$150</Text>
              <Text style={[globalStyles.gothamBook]}>01.03.05</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={[globalStyles.gothamBook]}>10</Text>
                <Icon
                  name="ios-mail"
                  type="ionicon"
                  color="silver"
                  containerStyle={{ marginLeft: 5 }}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </Grayscale>
    );
  }
  return (
    <ImageBackground
      style={styles.elementContainer}
      source={require('../../assets/images/background-phone.jpg')}>
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              marginLeft: 40,
              flex: 1,
              paddingTop: 25,
            }}>
            <Text
              style={[
                globalStyles.gothamMediumRegular,
                styles.fontDescription,
              ]}>
              Whole every miles as tiled at seven or. Wished he entire esteem mr
              oh by.
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
              onPress={() => showOption(true)}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: 44,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={[globalStyles.gothamBook]}>$150</Text>
          <Text style={[globalStyles.gothamBook]}>01.03.05</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[globalStyles.gothamBook]}>10</Text>
            <Icon
              name="ios-mail"
              type="ionicon"
              color="silver"
              containerStyle={{ marginLeft: 5 }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title:
            'Affronting everything discretion men now own did. Still round match we to. ',
          price: '150$',
          date: '15.04.1995',
          message: '13',
        },
        {
          id: 2,
          title:
            'Affronting everything discretion men now own did. Still round match we to. ',
          price: '150$',
          date: '15.04.1995',
          message: '13',
        },
        {
          id: 3,
          title:
            'Affronting everything discretion men now own did. Still round match we to. ',
          price: '150$',
          date: '15.04.1995',
          message: '13',
        },
        {
          id: 4,
          title:
            'Affronting everything discretion men now own did. Still round match we to. ',
          price: '150$',
          date: '15.04.1995',
          message: '13',
        },
        {
          id: 5,
          title:
            'Affronting everything discretion men now own did. Still round match we to. ',
          price: '150$',
          date: '15.04.1995',
          message: '13',
        },
      ],
      showOption: false,
      filters: [
        {
          id: 0,
          title: 'Active',
          active: true,
          func: () => {
            this.setState({ grayscale: false });
          },
        },
        {
          id: 1,
          title: 'Unactive',
          active: false,
          func: () => {
            this.setState({ grayscale: true });
          },
        },
      ],
      grayscale: false,
    };
  }

  showOption = value => {
    this.setState({
      showOption: value,
    });
  };

  handlePressSelectedView = name => {
    this.setState({
      active: false,
      inactive: false,
      [name]: true,
    });
  };

  handlePressFilter = id => {
    const { filters } = this.state;
    const newFilter = filters.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    this.setState({
      filters: newFilter,
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={['rgb(45,118,233)', 'rgb(97,193,248)']}
          start={{ x: 0.0, y: 1 }}
          end={{ x: 0.8, y: 1.3 }}>
          <View style={styles.headerProfile}>
            <View style={styles.headerProfileContainer}>
              <Icon
                name="folder-open"
                type="ion-icon"
                color="white"
                containerStyle={styles.iconHeader}
                onPress={() =>
                  this.props.navigation.navigate('ProfilePaymentHistory')
                }
              />
              <View>
                <View style={styles.profileImage}>
                  <Icon
                    name="person"
                    type="ion-icon"
                    size={50}
                    color="silver"
                    containerStyle={styles.iconProfile}
                  />
                </View>
                <Icon
                  name="pencil-outline"
                  type="material-community"
                  color="white"
                  size={20}
                  containerStyle={styles.iconHeaderProfile}
                />
              </View>
              <View>
                <View>
                  <Icon
                    name="ios-notifications-outline"
                    type="ionicon"
                    color="white"
                    containerStyle={styles.iconHeader}
                    onPress={() =>
                      this.props.navigation.navigate('ProfileNotifications')
                    }
                  />
                </View>
                <View style={styles.containerTextIcon}>
                  <Text
                    style={[
                      globalStyles.gothamMediumRegular,
                      styles.fontInsideImage,
                    ]}>
                    5
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={[globalStyles.gothamBold, styles.headerTitleText]}>
                Lucas Blar
              </Text>
            </View>
          </View>
        </LinearGradient>
        <Button
          title="Settings"
          titleStyle={[globalStyles.gothamBold, styles.btnSettingsTitle]}
          buttonStyle={styles.btnStyle}
          onPress={() => this.props.navigation.navigate('ProfileSettings')}
        />
        <View>
          <View style={styles.infoElement}>
            <Icon
              name="ios-mail"
              type="ionicon"
              color={colors.HEADER}
              containerStyle={{ marginHorizontal: 20 }}
            />
            <Text style={[globalStyles.gothamBook, { fontSize: 15 }]}>
              danny@gmail.com
            </Text>
          </View>
          <View style={styles.infoElement}>
            <Icon
              name="ios-call"
              type="ionicon"
              color={colors.HEADER}
              containerStyle={{ marginHorizontal: 20 }}
            />
            <Text style={[globalStyles.gothamBook, { fontSize: 15 }]}>
              498-848-7534
            </Text>
          </View>
          <View style={styles.infoElement}>
            <Icon
              name="ios-business"
              type="ionicon"
              color={colors.HEADER}
              containerStyle={{ marginHorizontal: 20 }}
            />
            <Text style={[globalStyles.gothamBook, { fontSize: 15 }]}>
              Kuwait
            </Text>
          </View>
        </View>
        <View style={styles.blockBody}>
          <Text style={[globalStyles.gothamBold, styles.headerText]}>
            MY ADS
          </Text>

          <View style={styles.selectedContainer}>
            <TextPicker
              dataList={this.state.filters}
              onPressElement={this.handlePressFilter}
            />
          </View>
          <View style={[styles.container, { marginTop: 10 }]}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <ElementFL
                  item={item}
                  showOption={this.showOption}
                  grayscale={this.state.grayscale}
                />
              )}
            />
          </View>
          <ModalProfile
            show={this.state.showOption}
            showOption={this.showOption}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
