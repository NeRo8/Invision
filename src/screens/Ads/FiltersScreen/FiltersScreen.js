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

import { translate } from '../../../i18n';

const ElementCategories = ({ element, onPressElement }) => (
  <TouchableOpacity
    style={styles.categoryElement}
    onPress={() => onPressElement('category', element.name)}>
    <Image
      source={
        element.icon_image !== null
          ? { uri: element.icon_image }
          : element.icon_image
      }
      style={{ width: 30, height: 30 }}
      resizeMode="contain"
    />
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

      minPrice: 0,
      maxPrice: 200000,

      typeOfAd: [
        {
          id: 0,
          title: translate('private'),
          value: 'privete',
          active: true,
          func: () => {},
        },
        {
          id: 1,
          title: translate('business'),
          value: 'business',
          active: false,
          func: () => {},
        },
        {
          id: 2,
          title: translate('all'),
          value: 'all',
          active: false,
          func: () => {},
        },
      ],

      stateOfProduct: [
        {
          id: 0,
          title: translate('new'),
          value: 'new',
          active: true,
          func: () => {},
        },
        {
          id: 1,
          title: translate('used'),
          value: 'used',
          active: false,
          func: () => {},
        },
        {
          id: 2,
          title: translate('all'),
          value: 'all',
          active: false,
          func: () => {},
        },
      ],
    };
  }

  componentDidMount() {
    const { getCategoriesList } = this.props;

    const { filters } = this.props;
    const { typeOfAd, stateOfProduct } = this.state;

    const newTypeOfAd = typeOfAd.map(item =>
      item.value === filters.seller_type
        ? { ...item, active: true }
        : { ...item, active: false },
    );

    const newStateOfProduct = stateOfProduct.map(item =>
      item.value === filters.state
        ? { ...item, active: true }
        : { ...item, active: false },
    );

    this.setState({
      minPrice: filters.price_min,
      maxPrice: filters.price_max,
      typeOfAd: newTypeOfAd,
      stateOfProduct: newStateOfProduct,
    });

    getCategoriesList();
  }

  handlePressTypeAd = id => {
    const { typeOfAd } = this.state;
    const { onChangeFilter } = this.props;

    const newFilters = typeOfAd.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    newFilters.forEach(element => {
      element.active === true
        ? onChangeFilter('seller_type', element.value)
        : null;
    });

    this.setState({
      typeOfAd: newFilters,
    });
  };

  handlePressFilterProduct = id => {
    const { stateOfProduct } = this.state;
    const { onChangeFilter } = this.props;

    const newFilters = stateOfProduct.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    newFilters.forEach(element => {
      element.active === true ? onChangeFilter('state', element.value) : null;
    });

    this.setState({
      stateOfProduct: newFilters,
    });
  };

  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });

  onMultiSliderValueChange = values => {
    const { onChangeFilter } = this.props;

    onChangeFilter('price_min', values[0]);
    onChangeFilter('price_max', values[1]);
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
            <Text style={styles.textBlock}>
              {translate('typeOfAd').toUpperCase()}
            </Text>
            <View style={styles.selectBlock}>
              <TextPicker
                dataList={typeOfAd}
                onPressElement={this.handlePressTypeAd}
              />
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>
              {translate('whatIsTheState').toUpperCase()}
            </Text>
            <View style={styles.selectBlock}>
              <TextPicker
                dataList={stateOfProduct}
                onPressElement={this.handlePressFilterProduct}
              />
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>{translate('price')}</Text>
            <View>
              <View style={styles.blockPrice}>
                <Input
                  value={this.state.minPrice.toString()}
                  placeholder="0"
                  label={translate('from')}
                  labelStyle={styles.labelInput}
                  inputStyle={styles.inputS}
                  inputContainerStyle={styles.inputStyle}
                  containerStyle={styles.inputContainer}
                  onChangeText={text => this.setState({ minPrice: text })}
                  onSubmitEditing={() =>
                    onChangeFilter('price_min', this.state.minPrice)
                  }
                />
                <View style={{ width: 10 }} />
                <Input
                  value={this.state.maxPrice.toString()}
                  placeholder="0"
                  label={translate('to')}
                  labelStyle={styles.labelInput}
                  inputStyle={styles.inputS}
                  inputContainerStyle={styles.inputStyle}
                  containerStyle={styles.inputContainer}
                  onChangeText={text => this.setState({ maxPrice: text })}
                  onSubmitEditing={() =>
                    onChangeFilter('price_max', this.state.maxPrice)
                  }
                />
              </View>
              <View>
                <MultiSlider
                  min={min}
                  max={max}
                  values={[
                    parseInt(filters.price_min),
                    parseInt(filters.price_max),
                  ]}
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
                  <Text style={styles.textElement}>{filters.price_min}</Text>
                  <Text style={styles.textElement}>{filters.price_max}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>
              {translate('chooseCategory').toUpperCase()}
            </Text>
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
