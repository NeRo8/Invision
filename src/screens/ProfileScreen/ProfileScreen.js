import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Button } from 'react-native-elements';

import { colors } from '../../constants/colors';

import styles from './styles';
import ModalProfile from '../../components/ModalProfile/ModalProfile';

const ElementFL = ({ item, showOption }) => (
  <ImageBackground
    style={styles.elementContainer}
    source={require('../../assets/images/background-phone.jpg')}>
    <View style={styles.container}>
      <View style={styles.elementBody}>
        <Text style={styles.fontInsideImage}>
          Whole every miles as tiled at seven or. Wished he entire esteem mr oh
          by.
        </Text>
        <Icon
          name="dots-vertical"
          type="material-community"
          containerStyle={styles.iconDots}
          onPress={() => showOption(true)}
        />
      </View>
    </View>
  </ImageBackground>
);

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      inactive: false,
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

  render() {
    const { active, inactive } = this.state;

    return (
      <View style={styles.container}>
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
                  <Text style={styles.fontInsideImage}>5</Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
        <Button
          title="Settings"
          titleStyle={styles.btnSettingTitle}
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
            <Text>danny@gmail.com</Text>
          </View>
          <View style={styles.infoElement}>
            <Icon
              name="ios-call"
              type="ionicon"
              color={colors.HEADER}
              containerStyle={{ marginHorizontal: 20 }}
            />
            <Text>498-848-7534</Text>
          </View>
          <View style={styles.infoElement}>
            <Icon
              name="ios-business"
              type="ionicon"
              color={colors.HEADER}
              containerStyle={{ marginHorizontal: 20 }}
            />
            <Text>Kuwait</Text>
          </View>
        </View>
        <View style={styles.blockBody}>
          <Text style={styles.headerText}>MY ADS</Text>

          <View style={styles.selectedContainer}>
            <TouchableOpacity
              style={
                active ? styles.selectedElementActive : styles.selectedElement
              }
              onPress={() => this.handlePressSelectedView('active')}>
              <Text
                style={
                  active
                    ? styles.selectedTextElementActive
                    : styles.selectedTextElement
                }>
                Active
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                inactive ? styles.selectedElementActive : styles.selectedElement
              }
              onPress={() => this.handlePressSelectedView('inactive')}>
              <Text
                style={
                  inactive
                    ? styles.selectedTextElementActive
                    : styles.selectedTextElement
                }>
                Inactive
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.container, { marginTop: 10 }]}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <ElementFL item={item} showOption={this.showOption} />
              )}
            />
          </View>
          <ModalProfile
            show={this.state.showOption}
            showOption={this.showOption}
          />
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
