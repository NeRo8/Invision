import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login';

import { colors, globalStyles } from '../../constants';
import { loginWithFacebook } from '../../redux/actions/Auth';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      igToken: '',
      igUserId: '',
    };
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
          console.log('FacebookToken: ', token);
          facebookLogin(token);
        }
      },
      function(error) {
        console.log('Login fail: ' + error);
      },
    );
  };

  setIgToken = async data => {
    console.log('Insta data: ', data);
    this.setState({ igToken: data.access_token, igUserId: data.user_id });
  };

  handlePressSignInEmail = () => {
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{ alignItems: 'center', flex: 2, justifyContent: 'center' }}>
          <View style={styles.logo}>
            <Image source={require('../../assets/icons/appIcon.png')} />
          </View>
          <View style={{ width: '80%' }}>
            <Text style={styles.logoText}>
              {'For first sign in to your account'}
            </Text>
          </View>
        </View>
        <View style={styles.blockBottom}>
          {/* <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('login has error: ' + result.error);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  console.log(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => console.log('logout.')}
          /> */}
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
            onPress={this.handlePressLoginFacebook}
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
            title="Sign in or Sign up use email"
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 30,
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

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    facebookLogin: token => {
      dispatch(loginWithFacebook(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
