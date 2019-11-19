import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { colors } from '../../../constants/colors';
import styles from './styles';
import globalStyles from '../../../constants/globalStyles';
import { connect } from 'react-redux';
import { signin } from '../../../redux/actions/authAction';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.email);
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={[globalStyles.gothamBook, styles.SignInText]}>
            Sign in
          </Text>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Input
              inputStyle={[globalStyles.gothamBook, styles.Input]}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Email address*"
              value={this.props.email}
            />
            <Input
              inputStyle={[globalStyles.gothamBook, styles.Input]}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Password*"
              value={this.props.password}
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
            />
            <Button
              title="Sign in"
              titleStyle={[globalStyles.gothamBold, styles.title]}
              buttonStyle={[
                styles.btnSignIn,
                { backgroundColor: colors.HEADER_BUTTON },
              ]}
              containerStyle={styles.btnContainer}
            />
          </View>
          <View style={styles.bottomView}>
            <Text style={[globalStyles.gothamBook, styles.OrUseText]}>
              Or use Sign in use social networks
            </Text>
            {/* <Icon
            name="facebook"
            type="material-community"
            color="white"
            iconStyle={{
              width: 100,
              height: 44,
              backgroundColor: colors.FACEBOOK,
              borderRadius: 30,
            }}
            onPress
          /> */}
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
    email: state.auth.email,
    password: state.auth.password,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePressSignIn: (e, p) => {
      dispatch(signin(e, p));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
