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

const ElementFL = ({ item }) => (
  <ImageBackground
    style={{
      width: null,
      height: 150,
      flex: 1,
      margin: 10,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: 'silver',
    }}
    source={require('../../assets/images/background-phone.jpg')}>
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Whole every miles as tiled at seven or. Wished he entire esteem mr oh
          by.
        </Text>
        <Icon
          name="dots-vertical"
          type="material-community"
          containerStyle={{
            borderRadius: 17,
            width: 35,
            height: 35,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
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
    };
  }

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
                containerStyle={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: 'rgba(255,255,255, 0.3)',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <View style={styles.profileImage}>
                <Icon
                  name="pencil-outline"
                  type="material-community"
                  color="white"
                  iconStyle={{}}
                  containerStyle={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.HEADER,
                  }}
                />
              </View>
              <Icon
                name="ios-notifications-outline"
                type="ionicon"
                color="white"
                containerStyle={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: 'rgba(255,255,255, 0.3)',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
          </View>
        </LinearGradient>
        <Button
          title="Settings"
          titleStyle={{
            fontWeight: 'bold',
          }}
          buttonStyle={{
            borderRadius: 0,
            backgroundColor: colors.HEADER,
            height: 50,
          }}
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
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <ElementFL item={item} />}
          />
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
