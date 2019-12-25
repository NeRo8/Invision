import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-elements';

import { DefaultButton } from '../../../components/Buttons';
import { IconInput } from '../../../components/Inputs';

import { getCities } from '../../../api/users';

import styles from './styles';

class ProfileSettingsPersonalInformaion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: { id: null, name: null },
      fullName: null,
      phone: null,
      email: null,
      selectBoxVisible: false,
      cityList: [],
    };
  }

  async componentDidMount() {
    getCities().then(cities => this.setState({ cityList: cities }));
  }

  onChangeState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      city,
      fullName,
      phone,
      selectBoxVisible,
      cityList,
      email,
    } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <IconInput
            iconName="md-person"
            placeholder="Please enter your full name"
            label="Full name"
            value={fullName}
            onChangeText={text => this.onChangeState('fullName', text)}
          />

          <IconInput
            iconName="ios-phone-portrait"
            placeholder="Please enter your phone number"
            label="Phone number"
            value={phone}
            onChangeText={text => this.onChangeState('phone', text)}
          />

          <IconInput
            iconName="ios-mail"
            placeholder="Please enter your email"
            label="Email"
            value={email}
            onChangeText={text => this.onChangeState('email', text)}
          />

          <IconInput
            iconName="ios-home"
            placeholder="Please select your city"
            label="Select city"
            value={city.name}
            onFocus={() => this.onChangeState('selectBoxVisible', true)}
          />

          {selectBoxVisible ? (
            <FlatList
              data={cityList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    this.onChangeState('city', item);
                    this.onChangeState('selectBoxVisible', false);
                  }}
                  style={styles.selectBoxItem}>
                  <Text style={styles.selectBoxText}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index}
              contentContainerStyle={styles.selectBoxContainer}
              ItemSeparatorComponent={() => <Divider />}
            />
          ) : null}

          <DefaultButton title="Save changes" />
        </View>
      </SafeAreaView>
    );
  }
}

export default ProfileSettingsPersonalInformaion;
