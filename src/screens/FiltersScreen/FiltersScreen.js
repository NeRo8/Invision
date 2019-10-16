import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { colors } from '../../constants/colors';
import styles from './styles';

class FiltersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollEnabled: true,
      min: 0,
      max: 1000000,
      multiSliderValue: [0, 400000],

      typeOfAd: {
        private: false,
        buisnes: false,
        all: false,
      },

      stateOfProduct: {
        newProduct: false,
        bA: false,
        all: false,
      },
    };
  }

  componentDidUpdate() {
    console.log(this.state.typeOfAd);
  }

  handlePressTypeOfAdd = name => {
    const { typeOfAd } = this.state;

    const newTypeOfAd = {
      ...typeOfAd,
      private: false,
      all: false,
      buisnes: false,
      [name]: true,
    };

    this.setState({
      typeOfAd: newTypeOfAd,
    });
  };

  handlePressStateOfProduct = name => {
    const { stateOfProduct } = this.state;

    const newStateOfProduct = {
      ...stateOfProduct,
      all: false,
      bA: false,
      newProduct: false,
      [name]: true,
    };

    this.setState({
      stateOfProduct: newStateOfProduct,
    });
  };

  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });

  onMultiSliderValueChange = values =>
    this.setState({ multiSliderValue: values });

  render() {
    const { min, max, multiSliderValue, typeOfAd, stateOfProduct } = this.state;

    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={this.state.scrollEnabled}>
        <View style={styles.container}>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>TYPE OF AD</Text>
            <View style={styles.selectBlock}>
              <TouchableOpacity
                style={typeOfAd.private ? styles.elementActive : styles.element}
                onPress={() => this.handlePressTypeOfAdd('private')}>
                <Text
                  style={
                    typeOfAd.private
                      ? styles.textElementActive
                      : styles.textElement
                  }>
                  Private
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={typeOfAd.buisnes ? styles.elementActive : styles.element}
                onPress={() => this.handlePressTypeOfAdd('buisnes')}>
                <Text
                  style={
                    typeOfAd.buisnes
                      ? styles.textElementActive
                      : styles.textElement
                  }>
                  Buisnes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={typeOfAd.all ? styles.elementActive : styles.element}
                onPress={() => this.handlePressTypeOfAdd('all')}>
                <Text
                  style={
                    typeOfAd.all ? styles.textElementActive : styles.textElement
                  }>
                  All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>STATE OF PRODUCT</Text>
            <View style={styles.selectBlock}>
              <TouchableOpacity
                style={
                  stateOfProduct.newProduct
                    ? styles.elementActive
                    : styles.element
                }
                onPress={() => this.handlePressStateOfProduct('newProduct')}>
                <Text
                  style={
                    stateOfProduct.newProduct
                      ? styles.textElementActive
                      : styles.textElement
                  }>
                  New
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  stateOfProduct.bA ? styles.elementActive : styles.element
                }
                onPress={() => this.handlePressStateOfProduct('bA')}>
                <Text
                  style={
                    stateOfProduct.bA
                      ? styles.textElementActive
                      : styles.textElement
                  }>
                  b/a
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  stateOfProduct.all ? styles.elementActive : styles.element
                }
                onPress={() => this.handlePressStateOfProduct('all')}>
                <Text
                  style={
                    stateOfProduct.all
                      ? styles.textElementActive
                      : styles.textElement
                  }>
                  All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>Price</Text>
            <View>
              <View style={styles.blockPrice}>
                <Input
                  placeholder="0"
                  label="From"
                  labelStyle={styles.labelInput}
                  inputContainerStyle={styles.inputStyle}
                  containerStyle={styles.inputContainer}
                />
                <View style={{ width: 10 }} />
                <Input
                  placeholder="0"
                  label="To"
                  labelStyle={styles.labelInput}
                  inputContainerStyle={styles.inputStyle}
                  containerStyle={styles.inputContainer}
                />
              </View>
              <View>
                <MultiSlider
                  min={min}
                  max={max}
                  values={multiSliderValue}
                  sliderLength={Dimensions.get('window').width - 20}
                  markerStyle={{ borderRadius: 0, height: 20, width: 20 }}
                  containerStyle={{ flex: 1 }}
                  onValuesChange={this.onMultiSliderValueChange}
                  onValuesChangeStart={this.disableScroll}
                  onValuesChangeFinish={this.enableScroll}
                  unselectedStyle={{
                    backgroundColor: 'rgba(35, 107, 230, 0.2)',
                    height: 5,
                  }}
                  selectedStyle={{ backgroundColor: colors.HEADER, height: 5 }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{this.state.multiSliderValue[0]}</Text>
                  <Text>{this.state.multiSliderValue[1]}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>CHOOSE CATEGORY</Text>
            <ScrollView
              horizontal
              contentContainerStyle={styles.blockPrice}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default FiltersScreen;
