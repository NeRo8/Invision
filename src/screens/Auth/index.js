import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { colors } from '../../constants/colors';
import globalStyles from '../../constants/globalStyles';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressSignInEmail = () => {
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ alignItems: 'center', flex: 2, justifyContent: 'center' }}>
          <View style={styles.logo}>
            <Image source={require('../../assets/icons/appIcon.png')} />
          </View>
          <View style={{ width: '55%' }}>
            <Text style={styles.logoText}>
              {'For first sign in to your account'}
            </Text>
          </View>
        </View>
        <View style={styles.blockBottom}>
          <Button
            icon={{
              name: 'facebook',
              type: 'material-community',
              color: 'white',
            }}
            title="Sign in use Facebook"
            titleStyle={styles.title}
            buttonStyle={[
              styles.btnStyle,
              { backgroundColor: colors.FACEBOOK },
            ]}
            containerStyle={styles.btnContainer}
            iconContainerStyle={{ flex: 2 }}
          />
          <Button
            icon={{
              name: 'twitter',
              type: 'material-community',
              color: 'white',
            }}
            title="Sign in use Twitter"
            titleStyle={styles.title}
            buttonStyle={[styles.btnStyle, { backgroundColor: colors.TWITTER }]}
            containerStyle={styles.btnContainer}
            iconContainerStyle={{ flex: 2 }}
          />
          <Button
            icon={{
              name: 'instagram',
              type: 'material-community',
              color: 'white',
            }}
            title="Sign in use Instagram"
            underlayColor={'silver'}
            backColor={colors.INSTAGRAM}
            titleStyle={styles.title}
            buttonStyle={[
              styles.btnStyle,
              { backgroundColor: colors.INSTAGRAM },
            ]}
            containerStyle={styles.btnContainer}
            iconContainerStyle={{ flex: 2 }}
          />
          <Button
            title="Sign in or Sign up use email"
            titleStyle={styles.titleEmail}
            buttonStyle={styles.btnStyleEmail}
            containerStyle={styles.btnContainer}
            onPress={this.handlePressSignInEmail}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnContainer: {
    width: '70%',
    marginVertical: 10,
  },
  titleEmail: {
    fontSize: 16,
    color: colors.HEADER,
    fontFamily: globalStyles.gothamBold.fontFamily,
  },
  btnStyleEmail: {
    height: 60,
    borderRadius: 2,
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: colors.HEADER,
  },
  logo: {
    marginTop: 60,
    borderRadius: 20,
  },
  logoText: {
    fontFamily: globalStyles.gothamBook.fontFamily,
    marginTop: 40,
    fontSize: 30,
    textAlign: 'center',
  },
  iconLogo: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    marginTop: -15,
  },
  btnStyle: {
    height: 60,
    borderRadius: 2,
  },
  title: {
    flex: 5,
    fontSize: 15,
    color: 'white',
    fontFamily: globalStyles.gothamBold.fontFamily,
    textAlign: 'left',
  },
  blockBottom: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default index;
