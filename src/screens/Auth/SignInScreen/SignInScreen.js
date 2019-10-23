import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { colors } from '../../../constants/colors';
import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <Text style={[styles.SignInText, globalStyles.gothamBook]}>
          Sign in
        </Text>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Input
            inputStyle={[styles.Input, globalStyles.gothamBook]}
            inputContainerStyle={{ borderBottomWidth: 0.6 }}
            containerStyle={{ paddingHorizontal: 30 }}
            placeholder="Email address*"
          />
          <Input
            inputStyle={[styles.Input, globalStyles.gothamBook]}
            inputContainerStyle={{ borderBottomWidth: 1 }}
            containerStyle={{ paddingHorizontal: 30 }}
            placeholder="Password*"
            rightIcon={
              <TouchableOpacity>
                <Text style={[styles.forgot, globalStyles.gothamBook]}>
                  Forgot?
                </Text>
              </TouchableOpacity>
            }
            rightIconContainerStyle={{ paddingTop: '4%' }}
          />
          <Button
            title="Sign in"
            titleStyle={[styles.title, globalStyles.gothamBold]}
            buttonStyle={[
              styles.btnSignIn,
              { backgroundColor: colors.HEADER_BUTTON },
            ]}
            containerStyle={styles.btnContainer}
          />
        </View>
        <View style={styles.bottomView}>
          <Text style={[styles.OrUseText, globalStyles.gothamBook]}>
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
    );
  }
}

export default SignInScreen;
