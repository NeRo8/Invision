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
              inputStyle={[styles.Input, globalStyles.gothamBook]}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="First & Last name"
            />
            <Input
              inputStyle={[styles.Input, globalStyles.gothamBook]}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Email"
            />
            <Input
              inputStyle={[styles.Input, globalStyles.gothamBook]}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Phone number"
            />
            <Input
              inputStyle={[styles.Input, globalStyles.gothamBook]}
              inputContainerStyle={{ borderBottomWidth: 1 }}
              containerStyle={{ paddingHorizontal: 30 }}
              placeholder="Password"
            />
            <Button
              title="Sign up"
              titleStyle={[styles.title, globalStyles.gothamBold]}
              buttonStyle={[
                styles.btnSignUp,
                { backgroundColor: colors.HEADER_BUTTON },
              ]}
              containerStyle={styles.btnContainer}
            />
            <CheckBox
              title="By Signing up you agree to our Terms of Service & Privacy Policy."
              textStyle={globalStyles.gothamBook}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.state.checked}
              containerStyle={{
                paddingHorizontal: 30,
                borderWidth: 0,
                backgroundColor: 'transparent',
              }}
            />
          </View>
          <View style={styles.bottomView}>
            <Text style={[styles.OrUseText, globalStyles.gothamBook]}>
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
