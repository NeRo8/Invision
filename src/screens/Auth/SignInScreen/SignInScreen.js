import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { colors } from '../../../constants/colors';
import styles from './styles';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <View>
          <Text style={styles.SignInText}>Sign in</Text>
          <Input
            inputStyle={styles.Input}
            inputContainerStyle={{ borderBottomWidth: 0.6 }}
            containerStyle={{ paddingHorizontal: 30 }}
            placeholder="Email address*"
          />
          <Input
            inputStyle={styles.Input}
            inputContainerStyle={{ borderBottomWidth: 1 }}
            containerStyle={{ paddingHorizontal: 30 }}
            placeholder="Password*"
            rightIcon={
              <TouchableOpacity style={{ paddingTop: 50 }}>
                <Text style={{ fontSize: 17, color: colors.HEADER_BUTTON }}>
                  Forgot?
                </Text>
              </TouchableOpacity>
            }
          />
          <Button
            title="Sign in"
            titleStyle={styles.title}
            buttonStyle={[
              styles.btnSignIn,
              { backgroundColor: colors.HEADER_BUTTON },
            ]}
            containerStyle={styles.btnContainer}
          />
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.OrUseText}>
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
    );
  }
}

export default SignInScreen;
