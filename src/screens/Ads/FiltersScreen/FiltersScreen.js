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

import { colors } from '../../../constants';

import styles from './styles';

const ElementCategories = ({ element, onPressElement }) => (
  <TouchableOpacity
    style={styles.categoryElement}
    onPress={() => onPressElement('category', element.name)}>
    {/**
      <Image
        source={}
        style={{ width: 30, height: 30 }}
      />
       */}
    <View style={{ width: 30, height: 30 }}></View>
    <Text style={styles.titleCategory}>{element.name}</Text>
  </TouchableOpacity>
);

class FiltersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollEnabled: true,
      min: 0,
      max: 1000000,

      activeFilterTypeAd: 'private',
      typeOfAd: [
        {
          id: 0,
          title: 'Private',
          active: true,
          func: () => {
            this.setState({ activeFilterTypeAd: 'private' });
            this.props.onChangeFilter('typeOfAd', 'private');
          },
        },
        {
          id: 1,
          title: 'Business',
          active: false,
          func: () => {
            this.setState({ activeFilterTypeAd: 'business' });
            this.props.onChangeFilter('typeOfAd', 'business');
          },
        },
        {
          id: 2,
          title: 'All',
          active: false,
          func: () => {
            this.setState({ activeFilterTypeAd: 'all' });
            this.props.onChangeFilter('typeOfAd', 'all');
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
            this.props.onChangeFilter('stateOfProduct', 'new');
          },
        },
        {
          id: 1,
          title: 'b/a',
          active: false,
          func: () => {
            this.setState({ activeFilterProduct: 'used' });
            this.props.onChangeFilter('stateOfProduct', 'used');
          },
        },
        {
          id: 2,
          title: 'All',
          active: false,
          func: () => {
            this.setState({ activeFilterProduct: 'all' });
            this.props.onChangeFilter('stateOfProduct', 'all');
          },
        },
      ],
    };
  }

  componentDidMount() {
    const { loadCategories } = this.props;

    loadCategories();
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

  onMultiSliderValueChange = values => {
    const { onChangeFilter } = this.props;

    onChangeFilter('minPrice', values[0]);
    onChangeFilter('maxPrice', values[1]);
  };
  render() {
    const { min, max, typeOfAd, stateOfProduct } = this.state;
    const { categories, onChangeFilter, filters } = this.props;

    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={this.state.scrollEnabled}>
        <View style={styles.container}>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>TYPE OF AD</Text>
            <View style={styles.selectBlock}>
              <TextPicker
                dataList={typeOfAd}
                onPressElement={this.handlePressTypeAd}
              />
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>STATE OF PRODUCT</Text>
            <View style={styles.selectBlock}>
              <TextPicker
                dataList={stateOfProduct}
                onPressElement={this.handlePressFilterProduct}
              />
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>Price</Text>
            <View>
              <View style={styles.blockPrice}>
                <Input
                  value={filters.minPrice.toString()}
                  placeholder="0"
                  label="From"
                  labelStyle={styles.labelInput}
                  inputStyle={styles.inputS}
                  inputContainerStyle={styles.inputStyle}
                  containerStyle={styles.inputContainer}
                />
                <View style={{ width: 10 }} />
                <Input
                  value={filters.maxPrice.toString()}
                  placeholder="0"
                  label="To"
                  labelStyle={styles.labelInput}
                  inputStyle={styles.inputS}
                  inputContainerStyle={styles.inputStyle}
                  containerStyle={styles.inputContainer}
                />
              </View>
              <View>
                <MultiSlider
                  min={min}
                  max={max}
                  values={[filters.minPrice, filters.maxPrice]}
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
                  <Text style={styles.textElement}>{filters.minPrice}</Text>
                  <Text style={styles.textElement}>{filters.maxPrice}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>CHOOSE CATEGORY</Text>
            <FlatList
              horizontal
              contentContainerStyle={styles.blockPrice}
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={({ item }) => (
                <ElementCategories
                  element={item}
                  onPressElement={onChangeFilter}
                />
              )}
              keyExtractor={items => items.pk.toString()}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default FiltersScreen;
