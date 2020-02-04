import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { DefaultButton } from '../../../components/Buttons';

import { colors, globalStyles } from '../../../constants';

const ModalSuccess = ({ show, email, onPressSubmit }) => (
  <Modal transparent visible={show}>
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.iconContainer}>
            <Icon
              name="ios-checkmark"
              type="ionicon"
              color={colors.HEADER}
              size={70}
              underlayColor="transparent"
            />
          </View>
        </View>
        <Text style={styles.headerText}>Success</Text>
        <Text style={styles.textAlert}>
          {`We’ve sent you access for access on your email - ${email}. Please,
          check your email and create new password.`}
        </Text>
        <DefaultButton
          title="Ok, thanks"
          onPressButton={() => onPressSubmit()}
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
  containerBox: {
    marginHorizontal: 15,
    paddingVertical: 25,
    paddingHorizontal: 40,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  iconContainer: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 1,
    borderColor: colors.HEADER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    ...globalStyles.gothamBold,
    fontSize: 22,
    textAlign: 'center',
    marginTop: 25,
  },
  textAlert: {
    ...globalStyles.gothamBook,
    fontSize: 14,
    marginBottom: 25,
    marginTop: 15,
    lineHeight: 24,
    textAlign: 'center',
    color: '#2C3440',
  },
});

export default ModalSuccess;
