import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { colors } from '../../../constants/colors';
import styles from './styles';
import globalStyles from '../../../constants/globalStyles';
import { connect } from 'react-redux';

import { DefaultInput } from '../../../components/Inputs';

import { login } from '../../../redux/actions/authAction';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  onChangeState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={[globalStyles.gothamBook, styles.SignInText]}>
            Sign in
          </Text>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <DefaultInput
              value={this.state.email}
              placeholder="Email address*"
              onChangeText={text => this.onChangeState('email', text)}
            />
            <DefaultInput
              value={this.state.password}
              placeholder="Password*"
              rightIcon={
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('ForgotPassword')
                  }>
                  <Text style={[globalStyles.gothamBook, styles.forgot]}>
                    Forgot?
                  </Text>
                </TouchableOpacity>
              }
              rightIconContainerStyle={{ paddingTop: 20 }}
              onChangeText={text => this.onChangeState('password', text)}
            />
            <Button
              title="Sign in"
              titleStyle={[globalStyles.gothamBold, styles.title]}
              buttonStyle={[
                styles.btnSignIn,
                { backgroundColor: colors.HEADER_BUTTON },
              ]}
              containerStyle={styles.btnContainer}
              onPress={() =>
                this.props.handlePressSignIn(
                  this.state.email,
                  this.state.password,
                )
              }
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

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePressSignIn: (email, password) => {
      dispatch(login(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
