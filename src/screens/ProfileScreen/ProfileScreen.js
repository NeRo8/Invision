import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Modal,
  Switch,
  Image,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, Button } from 'react-native-elements';

import { colors } from '../../constants/colors';

import styles from './styles';
import { whileStatement } from '@babel/types';

const ElementFL = ({ item, showOption }) => (
  <ImageBackground
    style={styles.elementContainer}
    source={require('../../assets/images/background-phone.jpg')}>
    <View style={{ flex: 1 }}>
      <View style={styles.elementBody}>
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
            renderItem={({ item }) => (
              <ElementFL item={item} showOption={this.showOption} />
            )}
          />
        </View>
        <Modal style={{ flex: 1 }} visible={this.state.showOption} transparent>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0, 0.7)',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 300,
                backgroundColor: 'white',
                width: '95%',
              }}>
              <Image
                source={require('../../assets/images/element-background.jpg')}
                style={{ width: null, height: null, flex: 1 }}
              />
              <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginHorizontal: 30,
                    marginTop: 20,
                  }}>
                  SELECT ONE OF ACTION
                </Text>
                <View>
                  <Button
                    icon={{
                      name: 'pencil-outline',
                      type: 'material-community',
                      color: 'white',
                      containerStyle: {
                        backgroundColor: colors.HEADER,
                        borderRadius: 20,
                        padding: 2,
                        marginHorizontal: 10,
                      },
                    }}
                    title="Edit ad"
                    titleStyle={{ color: colors.HEADER }}
                    buttonStyle={{
                      borderRadius: 0,
                      backgroundColor: 'white',
                      borderBottomWidth: 1,
                      borderColor: 'silver',
                      height: 50,
                      justifyContent: 'flex-start',
                    }}
                    containerStyle={{ height: 50 }}
                  />
                  <Button
                    icon={{
                      name: 'trash-can-outline',
                      type: 'material-community',
                      color: 'white',
                      containerStyle: {
                        backgroundColor: 'red',
                        borderRadius: 20,
                        padding: 2,
                        marginHorizontal: 10,
                      },
                    }}
                    title="Delete ad"
                    titleStyle={{ color: 'red' }}
                    buttonStyle={{
                      borderRadius: 0,
                      height: 50,
                      backgroundColor: 'white',
                      borderColor: 'silver',
                      justifyContent: 'flex-start',
                    }}
                    containerStyle={{ height: 50 }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                height: 50,
                width: '95%',
                backgroundColor: 'white',
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={{ fontSize: 16 }}>Active or inactive</Text>
              <Switch />
            </View>
            <Button
              title="Done"
              titleStyle={{ fontWeight: 'bold' }}
              buttonStyle={{
                backgroundColor: colors.HEADER,
                height: 50,
                borderRadius: 0,
              }}
              containerStyle={{ width: '95%', marginBottom: 40 }}
              onPress={() => this.showOption(false)}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default ProfileScreen;
