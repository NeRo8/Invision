import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Icon, Button, Divider } from 'react-native-elements';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';

import { CreateAdInput } from '../../../../components/Inputs';

import { getCities } from '../../../../api/users';

import styles from './styles';

class Step4Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCitiesList: false,
    };
  }

  handlePressContinue = () => {
    const { full_name, city, email, phone_number, navigation } = this.props;
    if (
      full_name === null ||
      city.name === null ||
      email === null ||
      phone_number === null
    ) {
      Alert.alert('Please fill required fields, before continue.');
    } else {
      navigation.navigate('StepFive');
    }
  };

  handlePressCities = async () => {
    this.setState({ cities: await getCities(), showCitiesList: true });
  };

  handlePressCity = city => {
    const { setValue } = this.props;

    setValue('city', city);
    this.setState({
      showCitiesList: false,
    });
  };

  render() {
    const { full_name, city, email, phone_number, setValue } = this.props;
    const { cities, showCitiesList } = this.state;

    return (
      <KeyboardAvoidingScrollView
        stickyFooter={
          <Button
            title="Continue"
            titleStyle={styles.btnTitle}
            buttonStyle={styles.btnStyles}
            onPress={this.handlePressContinue}
          />
        }
        containerStyle={styles.container}
        contentContainerStyle={styles.container}>
        <Text style={styles.headerTitle}>CONTACT DETAILS</Text>
        <CreateAdInput
          placeholder="Contact name"
          value={full_name}
          onChangeText={text => setValue('full_name', text)}
        />
        <TouchableOpacity onPress={this.handlePressCities}>
          <View style={styles.elementPicker}>
            <Text style={styles.elementPickerText}>
              {city.name !== null ? city.name : 'Choose youre city'}
            </Text>
            <Icon
              name="chevron-right"
              type="material-community"
              size={24}
              color={'#74859E'}
              containerStyle={{}}
              underlayColor="transparent"
            />
          </View>
        </TouchableOpacity>
        {showCitiesList ? (
          <View>
            <FlatList
              data={cities}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.textPickerContainer}
                  onPress={() => this.handlePressCity(item)}>
                  <Text style={styles.textPicker}>{item.name}</Text>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <Divider />}
              keyExtractor={(item, index) => index.toString()}
              style={{ height: 100 }}
              contentContainerStyle={styles.flContainer}
            />
          </View>
        ) : null}
        <CreateAdInput
          placeholder="Email address"
          value={email}
          onChangeText={text => setValue('email', text)}
        />
        <CreateAdInput
          placeholder="Contact phone number"
          value={phone_number}
          onChangeText={text => setValue('phone_number', text)}
        />
      </KeyboardAvoidingScrollView>
    );
  }
}

export default Step4Screen;
