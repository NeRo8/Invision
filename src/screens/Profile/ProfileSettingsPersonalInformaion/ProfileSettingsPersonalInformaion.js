import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-elements';
import DropdownAlert from 'react-native-dropdownalert';

import { DefaultButton } from '../../../components/Buttons';
import { IconInput } from '../../../components/Inputs';

import { getCities } from '../../../api/users';

import styles from './styles';

class ProfileSettingsPersonalInformaion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: { pk: null, name: null },
      full_name: null,
      phone_number: null,
      email: null,
      selectBoxVisible: false,
      cityList: [],
    };
  }

  async componentDidMount() {
    const { user } = this.props;

    getCities().then(cities => this.setState({ cityList: cities }));

    for (var key in user) {
      this.onChangeState(key, user[key]);
    }
  }

  componentDidUpdate() {
    const { error, onClearError } = this.props;

    if (error !== null && error === 'Success') {
      this.dropDownAlertRef.alertWithType(
        'success',
        'Success',
        'All field changed',
      );
      onClearError();
    } else if (error !== null) {
      this.dropDownAlertRef.alertWithType('error', 'Error', error);
      onClearError();
    }
  }

  onChangeState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handlePressSave = () => {
    const { full_name, city, phone_number, email } = this.state;
    const { token, onChangeProfile } = this.props;
    //Create new profile object
    const newProfile = {
      full_name: full_name,
      city: city.pk,
      phone_number: phone_number,
      email: email,
    };
    //Check all field is valid
    var isValid = true;
    for (var key in newProfile) {
      if (newProfile[key] === null) {
        isValid = false;
      }
    }
    //Go go power rangers
    if (isValid) {
      onChangeProfile(newProfile, token);
    }
  };

  render() {
    const {
      city,
      full_name,
      phone_number,
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
            value={full_name}
            onChangeText={text => this.onChangeState('full_name', text)}
          />

          <IconInput
            iconName="ios-phone-portrait"
            placeholder="Please enter your phone number"
            label="Phone number"
            value={phone_number}
            onChangeText={text => this.onChangeState('phone_number', text)}
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
            value={this.state.city.name !== null ? this.state.city.name : city}
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

          <DefaultButton
            title="Save changes"
            onPressButton={this.handlePressSave}
          />
        </View>
        <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
      </SafeAreaView>
    );
  }
}

export default ProfileSettingsPersonalInformaion;
