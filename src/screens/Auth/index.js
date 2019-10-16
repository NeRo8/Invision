import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-elements';

import { colors } from '../../constants/colors';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ alignItems: 'center', flex: 2, justifyContent: 'center' }}>
          <View style={styles.logo}>
            <Text style={styles.iconLogo}>m</Text>
          </View>

          <Text style={styles.logoText}>
            {'For first sign in \n to your account'}
          </Text>
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
          />
          <Button
            title="Sign in or Sign up use email"
            titleStyle={styles.titleEmail}
            buttonStyle={styles.btnStyleEmail}
            containerStyle={styles.btnContainer}
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
    fontWeight: 'bold',
  },
  btnStyleEmail: {
    height: 60,
    borderRadius: 0,
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: colors.HEADER,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.HEADER,
  },
  logoText: {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  iconLogo: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    lineHeight: 0,
    marginTop: -10,
  },
  btnStyle: {
    height: 60,
    borderRadius: 0,
  },
  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  blockBottom: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default index;
