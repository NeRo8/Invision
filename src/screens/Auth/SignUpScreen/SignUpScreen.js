import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Icon, Button, CheckBox } from 'react-native-elements';
import { colors } from '../../../constants/colors';
import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
          <Text style={[styles.SignUpText, globalStyles.gothamBook]}>
            Sign up
          </Text>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Input
              inputStyle={[globalStyles.gothamBook, styles.Input]}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="First & Last name"
            />
            <Input
              inputStyle={[globalStyles.gothamBook, styles.Input]}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Email"
            />
            <Input
              inputStyle={[globalStyles.gothamBook, styles.Input]}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Phone number"
            />
            <Input
              inputStyle={[globalStyles.gothamBook, styles.Input]}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Password"
            />
            <Button
              title="Sign up"
              titleStyle={[globalStyles.gothamBold, styles.title]}
              buttonStyle={[
                styles.btnSignUp,
                { backgroundColor: colors.HEADER_BUTTON },
              ]}
              containerStyle={styles.btnContainer}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 30,
              }}>
              <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state.checked}
                containerStyle={{
                  paddingHorizontal: 0,
                  marginHorizontal: 0,
                  borderWidth: 0,
                  backgroundColor: 'transparent',
                }}
              />
              <Text style={[globalStyles.gothamBook, styles.textOfTerms]}>
                By Signing up you agree to our {'\n'}
                <Text
                  style={[
                    globalStyles.gothamBook,
                    styles.textOfTerms,
                    { color: colors.HEADER },
                  ]}>
                  Terms of Service
                </Text>{' '}
                &{' '}
                <Text
                  style={[
                    globalStyles.gothamBook,
                    styles.textOfTerms,
                    { color: colors.HEADER },
                  ]}>
                  Privacy Policy
                </Text>
                .
              </Text>
            </View>
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
                  containerStyle: {},
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

export default SignUpScreen;
