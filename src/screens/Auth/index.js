import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login';

import { authActions } from '../../redux/Auth';

import { colors, icons } from '../../constants';
import styles from './styles';

import { translate } from '../../i18n';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      igToken: '',
      igUserId: '',
    };
  }

  componentDidMount() {
    const { navigation, authStatus } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
      if (authStatus) {
        navigation.navigate('CreateAd');
      }
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

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

  setIgToken = async data => {
    this.setState({ igToken: data.access_token, igUserId: data.user_id });
  };

  handlePressSignInEmail = () => {
    const { navigation } = this.props;

    navigation.navigate('Auth');
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{ alignItems: 'center', flex: 2, justifyContent: 'center' }}>
          <View style={styles.logo}>
            <Image source={icons.appIcon} />
          </View>
          <View style={{ width: '80%' }}>
            <Text style={styles.logoText}>{translate('signInIntro')}</Text>
          </View>
        </View>
        <View style={styles.blockBottom}>
          <Button
            icon={{
              name: 'facebook',
              type: 'material-community',
              color: 'white',
            }}
            title={translate('signInFacebook')}
            titleStyle={styles.title}
            buttonStyle={[
              styles.btnStyle,
              { backgroundColor: colors.FACEBOOK },
            ]}
            containerStyle={styles.btnContainer}
            iconContainerStyle={{ flex: 2 }}
            onPress={this.handlePressLoginFacebook}
          />
          <Button
            icon={{
              name: 'twitter',
              type: 'material-community',
              color: 'white',
            }}
            title={translate('signInTwitter')}
            titleStyle={styles.title}
            buttonStyle={[styles.btnStyle, { backgroundColor: colors.TWITTER }]}
            containerStyle={styles.btnContainer}
            iconContainerStyle={{ flex: 2 }}
            onPress={() => this.props.navigation.navigate('CreateAccount')}
          />
          <Button
            icon={{
              name: 'instagram',
              type: 'material-community',
              color: 'white',
            }}
            title={translate('signInInstagram')}
            underlayColor={'silver'}
            backColor={colors.INSTAGRAM}
            titleStyle={styles.title}
            buttonStyle={[
              styles.btnStyle,
              { backgroundColor: colors.INSTAGRAM },
            ]}
            containerStyle={styles.btnContainer}
            iconContainerStyle={{ flex: 2 }}
            onPress={() => this.instagramLogin.show()}
          />
          <InstagramLogin
            ref={ref => (this.instagramLogin = ref)}
            appId="548873462364017"
            appSecret="0814c6162f01dfaed4bdd8625fc5b93d"
            redirectUrl="https://staging.masaha.app/api/v1/"
            scopes={['user_profile', 'user_media']}
            onLoginSuccess={this.setIgToken}
            onLoginFailure={data => console.log(data)}
          />
          <Button
            title={translate('signInUpEmail')}
            titleStyle={styles.titleEmail}
            buttonStyle={styles.btnStyleEmail}
            containerStyle={styles.btnContainer}
            onPress={this.handlePressSignInEmail}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    facebookLogin: token => {
      dispatch(authActions.loginWithFacebook(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
