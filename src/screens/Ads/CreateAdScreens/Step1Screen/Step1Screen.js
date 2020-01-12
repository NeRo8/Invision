import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, CheckBox, Input, Button } from 'react-native-elements';
import GestureRecognizer from 'react-native-swipe-gestures';

import { colors } from '../../../../constants';

import styles from './styles';

class Step1Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSwipeRight = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

  render() {
    const {
      navigation,
      category,
      price,
      setValue,
      isSellerPrivate,
      stateProduct,
    } = this.props;
    return (
      <GestureRecognizer onSwipeRight={this.onSwipeRight} style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Text style={styles.headerTitle}>MAIN INFORMATION</Text>

          <View>
            <Text style={styles.underTitle}>WHAT DO YOU WANT TO SELL?</Text>
            <TouchableOpacity
              style={styles.elementPicker}
              onPress={() => navigation.navigate('ChooseCategory')}>
              <Text style={styles.elementPickerText}>
                {category !== null ? category.name : 'Choose category'}
              </Text>
              <Icon
                name="chevron-right"
                type="material-community"
                size={24}
                color={'#74859E'}
                containerStyle={{}}
              />
            </TouchableOpacity>
            <View style={[styles.elementPicker, { paddingLeft: 0 }]}>
              <Input
                leftIcon={{
                  name: 'cash-multiple',
                  type: 'material-community',
                  color: colors.HEADER,
                  containerStyle: { marginRight: 10 },
                }}
                placeholder="Price"
                inputStyle={styles.elementPickerText}
                inputContainerStyle={{
                  paddingHorizontal: 0,
                  borderBottomWidth: 0,
                }}
                containerStyle={{
                  flex: 1,
                  paddingHorizontal: 0,
                }}
                value={price.toString()}
                onChangeText={value => {
                  setValue('price', value);
                }}
              />

              <Text style={[styles.elementPickerText, { color: colors.TITLE }]}>
                KWD
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.underTitle}>CHOOSE TYPE SELLER</Text>
            <View style={styles.elementCheck}>
              <CheckBox
                checked={isSellerPrivate}
                iconType="ionicon"
                checkedIcon="ios-checkmark-circle"
                uncheckedIcon="ios-checkmark-circle-outline"
                checkedColor={colors.HEADER}
                title="Private"
                textStyle={styles.elementCheckBox}
                containerStyle={styles.checkmark}
                onPress={() => setValue('is_seller_private', true)}
              />
              <CheckBox
                checked={!isSellerPrivate}
                iconType="ionicon"
                checkedIcon="ios-checkmark-circle"
                uncheckedIcon="ios-checkmark-circle-outline"
                checkedColor={colors.HEADER}
                title="Businnes"
                textStyle={styles.elementCheckBox}
                containerStyle={styles.checkmark}
                onPress={() => setValue('is_seller_private', false)}
              />
            </View>
          </View>

          <View>
            <Text style={styles.underTitle}>
              {'What is the state of your product?'.toUpperCase()}
            </Text>
            <View style={styles.elementCheck}>
              <CheckBox
                checked={stateProduct === 'new' ? true : false}
                iconType="ionicon"
                checkedIcon="ios-checkmark-circle"
                uncheckedIcon="ios-checkmark-circle-outline"
                checkedColor={colors.HEADER}
                title="New"
                textStyle={styles.elementCheckBox}
                containerStyle={styles.checkmark}
                onPress={() => setValue('state', 'new')}
              />
              <CheckBox
                checked={stateProduct === 'used' ? true : false}
                iconType="ionicon"
                checkedIcon="ios-checkmark-circle"
                uncheckedIcon="ios-checkmark-circle-outline"
                checkedColor={colors.HEADER}
                title="Used"
                textStyle={styles.elementCheckBox}
                containerStyle={styles.checkmark}
                onPress={() => setValue('state', 'used')}
              />
            </View>
          </View>
        </ScrollView>

        <Button
          title="Continue"
          titleStyle={styles.btnTitle}
          buttonStyle={styles.btnStyles}
          onPress={() => navigation.navigate('StepTwo')}
        />
      </GestureRecognizer>
    );
  }
}

export default Step1Screen;
