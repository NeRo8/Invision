import React from 'react';
import { Modal, View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

import { colors, globalStyles } from '../../../../constants';

const ModalComplite = ({ show, onClose }) => (
  <Modal visible={show}>
    <View style={styles.container}>
      <View style={styles.modalWindow}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../../../assets/icons/like_round.png')}
              style={styles.iconLike}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={{ marginVertical: 26, alignItems: 'center' }}>
          <Text style={[globalStyles.gothamBook, styles.headerTitle]}>
            Thank you!
          </Text>
          <Text style={[globalStyles.gothamBook, styles.underTitle]}>
            Youre payment was successful
          </Text>
        </View>
        <Button
          title="Go to home"
          titleStyle={[
            globalStyles.gothamBold,
            { fontSize: 15, color: 'white' },
          ]}
          buttonStyle={{ height: 50, backgroundColor: colors.HEADER }}
          onPress={() => onClose()}
        />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    justifyContent: 'center',
  },
  modalWindow: {
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 25,
    paddingHorizontal: 38,
  },
  iconContainer: {
    width: 82,
    height: 82,
    borderRadius: 41,
    marginBottom: 25,
  },
  iconLike: {
    flex: 1,
    height: null,
    width: null,
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 26,
  },
  underTitle: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default ModalComplite;
