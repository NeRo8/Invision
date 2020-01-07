import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import { AccessToken, LoginManager } from 'react-native-fbsdk';

import { DefaultInput } from '../../../components/Inputs';

import { colors, globalStyles } from '../../../constants';
import styles from './styles';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: null,
        password: null,
      },
    };
  }

  onChangeState = (name, value) => {
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        [name]: value,
      },
    });
  };

  componentDidUpdate() {
    const { authStatus, navigation } = this.props;

    if (authStatus) {
      navigation.navigate('CreateAd');
    }
  }

  //onPress facebook

  handlePressLoginFacebook = () => {
    const { facebookLogin } = this.props;

    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      async result => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          const token = await AccessToken.getCurrentAccessToken().then(
            res => res.accessToken,
          );
          facebookLogin(token);
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  render() {
    const { navigation, handlePressSignIn } = this.props;
    const { data } = this.state;

    return (
      <ScrollView>
        <View>
          <Text style={styles.SignInText}>Sign in</Text>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <DefaultInput
              value={data.email}
              placeholder="Email address*"
              onChangeText={text => this.onChangeState('email', text)}
            />
            <DefaultInput
              value={data.password}
              placeholder="Password*"
              rightIcon={
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.forgot}>Forgot?</Text>
                </TouchableOpacity>
              }
              rightIconContainerStyle={{ paddingTop: 20 }}
              onChangeText={text => this.onChangeState('password', text)}
            />
            <Button
              title="Sign in"
              titleStyle={styles.title}
              buttonStyle={[
                styles.btnSignIn,
                { backgroundColor: colors.DEFAULT_BUTTON },
              ]}
              containerStyle={styles.btnContainer}
              onPress={() => handlePressSignIn(data)}
            />
          </View>
          <View style={styles.bottomView}>
            <Text style={[globalStyles.gothamBook, styles.OrUseText]}>
              Or use Sign in use social networks
            </Text>
            <View style={styles.btnSocialView}>
              <Button
                icon={{
                  name: 'facebook',
                  type: 'material-community',
                  color: 'white',
                }}
                titleStyle={styles.title}
                buttonStyle={[
                  styles.btnSocial,
                  { backgroundColor: colors.FACEBOOK },
                ]}
                containerStyle={styles.btnSocialContainer}
                onPress={() => this.handlePressLoginFacebook()}
              />
              <Button
                icon={{
                  name: 'twitter',
                  type: 'material-community',
                  color: 'white',
                }}
                titleStyle={styles.title}
                buttonStyle={[
                  styles.btnSocial,
                  { backgroundColor: colors.TWITTER },
                ]}
                containerStyle={styles.btnSocialContainer}
              />
              <Button
                icon={{
                  name: 'instagram',
                  type: 'material-community',
                  color: 'white',
                }}
                titleStyle={styles.title}
                buttonStyle={[
                  styles.btnSocial,
                  { backgroundColor: colors.INSTAGRAM },
                ]}
                containerStyle={styles.btnSocialContainer}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SignInScreen;
