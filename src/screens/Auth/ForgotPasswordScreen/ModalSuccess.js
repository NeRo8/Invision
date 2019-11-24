import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { colors, globalStyles } from '../../../constants';

const ModalSuccess = ({ show, onPressSubmit }) => (
  <Modal transparent visible={show}>
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 15,
          paddingVertical: 25,
          paddingHorizontal: 40,
          backgroundColor: 'white',
          borderRadius: 5,
        }}>
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              width: 82,
              height: 82,
              borderRadius: 41,
              borderWidth: 1,
              borderColor: colors.HEADER,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="ios-checkmark"
              type="ionicon"
              color={colors.HEADER}
              size={70}
            />
          </View>
        </View>
        <Text
          style={[
            globalStyles.gothamBold,
            { fontSize: 22, textAlign: 'center', marginTop: 25 },
          ]}>
          Success
        </Text>
        <Text
          style={[
            globalStyles.gothamBook,
            {
              fontSize: 14,
              marginBottom: 25,
              marginTop: 15,
              lineHeight: 24,
              textAlign: 'center',
              color: '#2C3440',
            },
          ]}>
          We’ve sent you access for access on your email - kris@gmail.com.
          Please, check your email and create new password.
        </Text>
        <Button
          title="Ok, thanks"
          titleStyle={[
            globalStyles.gothamBold,
            { fontSize: 15, color: 'white' },
          ]}
          buttonStyle={{ height: 55, backgroundColor: colors.HEADER }}
          onPress={() => onPressSubmit(false)}
        />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(127,127,127,0.8)',
  },
});

export default ModalSuccess;
