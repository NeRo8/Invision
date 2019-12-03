import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Input } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import TextPicker from '../../../components/TextPicker';

import { colors, globalStyles } from '../../../constants';

import styles from './styles';

class FiltersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollEnabled: true,
      min: 0,
      max: 1000000,
      multiSliderValue: [0, 400000],

      query: null,
      location: null,

      activeFilterTypeAd: 'private',
      typeOfAd: [
        {
          id: 0,
          title: 'Private',
          active: true,
          func: () => {
            this.setState({ activeFilterTypeAd: 'private' });
          },
        },
        {
          id: 1,
          title: 'Business',
          active: false,
          func: () => {
            this.setState({ activeFilterTypeAd: 'business' });
          },
        },
        {
          id: 2,
          title: 'All',
          active: false,
          func: () => {
            this.setState({ activeFilterTypeAd: 'all' });
          },
        },
      ],

      activeFilterProduct: 'new',
      stateOfProduct: [
        {
          id: 0,
          title: 'New',
          active: true,
          func: () => {
            this.setState({ activeFilterProduct: 'new' });
          },
        },
        {
          id: 1,
          title: 'b/a',
          active: false,
          func: () => {
            this.setState({ activeFilterProduct: 'used' });
          },
        },
        {
          id: 2,
          title: 'All',
          active: false,
          func: () => {
            this.setState({ activeFilterProduct: 'all' });
          },
        },
      ],

      activeCategory: null,
    };
  }

  componentDidMount() {
    const { getCategoryList } = this.props;
    getCategoryList();
  }

  handlePressTypeAd = id => {
    const { typeOfAd } = this.state;

    const newFilters = typeOfAd.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    this.setState({
      typeOfAd: newFilters,
    });
  };

  handlePressFilterProduct = id => {
    const { stateOfProduct } = this.state;

    const newFilters = stateOfProduct.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    this.setState({
      stateOfProduct: newFilters,
    });
  };

  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });

  onMultiSliderValueChange = values =>
    this.setState({ multiSliderValue: values });

  onChangeMinValue = min => {
    const { multiSliderValue } = this.state;
    this.setState({
      multiSliderValue: [parseInt(min), multiSliderValue[1]],
    });
  };

  onChangeMaxValue = max => {
    const { multiSliderValue } = this.state;
    this.setState({
      multiSliderValue: [multiSliderValue[0], parseInt(max)],
    });
  };

  render() {
    const { min, max, multiSliderValue, typeOfAd, stateOfProduct } = this.state;
    const { categoriesList } = this.props;

    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={this.state.scrollEnabled}>
        <View style={styles.container}>
          <View style={styles.filterElement}>
            <Text style={[globalStyles.gothamBold, styles.textBlock]}>
              TYPE OF AD
            </Text>
            <View style={styles.selectBlock}>
              <TextPicker
                dataList={typeOfAd}
                onPressElement={this.handlePressTypeAd}
              />
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={[globalStyles.gothamBold, styles.textBlock]}>
              STATE OF PRODUCT
            </Text>
            <View style={styles.selectBlock}>
              <TextPicker
                dataList={stateOfProduct}
                onPressElement={this.handlePressFilterProduct}
              />
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={[globalStyles.gothamBold, styles.textBlock]}>
              Price
            </Text>
            <View>
              <View style={styles.blockPrice}>
                <Input
                  value={this.state.multiSliderValue[0].toString()}
                  placeholder="0"
                  label="From"
                  labelStyle={styles.labelInput}
                  inputStyle={styles.inputS}
                  inputContainerStyle={styles.inputStyle}
                  containerStyle={styles.inputContainer}
                  onChangeText={minValue => this.onChangeMinValue(minValue)}
                />
                <View style={{ width: 10 }} />
                <Input
                  value={this.state.multiSliderValue[1].toString()}
                  placeholder="0"
                  label="To"
                  labelStyle={styles.labelInput}
                  inputStyle={styles.inputS}
                  inputContainerStyle={styles.inputStyle}
                  containerStyle={styles.inputContainer}
                  onChangeText={maxValue => this.onChangeMaxValue(maxValue)}
                />
              </View>
              <View>
                <MultiSlider
                  min={min}
                  max={max}
                  values={multiSliderValue}
                  sliderLength={Dimensions.get('window').width - 20}
                  markerStyle={styles.markerStyle}
                  pressedMarkerStyle={styles.markerStyle}
                  containerStyle={{ flex: 1 }}
                  onValuesChange={this.onMultiSliderValueChange}
                  onValuesChangeStart={this.disableScroll}
                  onValuesChangeFinish={this.enableScroll}
                  unselectedStyle={styles.unselectedStyle}
                  selectedStyle={{ backgroundColor: colors.HEADER, height: 14 }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textElement}>
                    {this.state.multiSliderValue[0].toLocaleString()}
                  </Text>
                  <Text style={styles.textElement}>
                    {this.state.multiSliderValue[1].toLocaleString()}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={[globalStyles.gothamBold, styles.textBlock]}>
              CHOOSE CATEGORY
            </Text>
            <FlatList
              horizontal
              contentContainerStyle={styles.blockPrice}
              showsHorizontalScrollIndicator={false}
              data={categoriesList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.categoryElement}
                  onPress={() => this.setState({ activeCategory: item.name })}>
                  {/**
                  <Image
                    source={}
                    style={{ width: 30, height: 30 }}
                  />
                   */}
                  <View style={{ width: 30, height: 30 }}></View>
                  <Text style={styles.titleCategory}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={items => items.id}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default FiltersScreen;
