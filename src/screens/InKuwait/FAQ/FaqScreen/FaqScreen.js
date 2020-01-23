import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import TextPicker from '../../../../components/TextPicker';
import HeaderInKuwaitCategory from '../../../../components/Headers/HeaderInKuwaitCategory';

import { colors } from '../../../../constants';
import styles from './styles';
const ElementFlatList = ({ item, onPressElement }) => (
  <TouchableOpacity
    style={styles.elementFL}
    onPress={() => onPressElement(item.pk)}>
    <View style={styles.roundView}>
      <Text style={styles.roundText}>{item.answer_count}</Text>
    </View>
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={styles.textElement}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

class FaqScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        {
          id: 0,
          value: 'top',
          title: 'Top Question',
          active: true,
          func: () => {},
        },
        {
          id: 1,
          value: 'recent',
          title: 'Recent Questions',
          active: false,
          func: () => {},
        },
      ],
    };
  }

  componentDidMount = () => {
    const { getFaqsList, filtersFaq } = this.props;

    getFaqsList(filtersFaq);
  };

  handlePressElementFilter = id => {
    const { filters } = this.state;
    const { filtersFaq, getFaqsList, setFilters } = this.props;

    const newFilters = filters.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    newFilters.forEach(item => {
      item.active === true ? setFilters(item.value) : null;
    });

    this.setState({
      filters: newFilters,
    });

    getFaqsList(filtersFaq);
  };

  handlePressElement = elementId => {
    const { setLoad } = this.props;

    setLoad();
    this.props.navigation.navigate('FaqDetail', { id: elementId });
  };

  render() {
    const { filters } = this.state;
    const {
      data,
      navigation,
      onSearch,
      getFaqsList,
      filtersFaq,
      loading,
      authStatus,
    } = this.props;

    return (
      <View style={styles.container}>
        <HeaderInKuwaitCategory
          title="FAQ"
          leftIcon={true}
          onPressLeftIcon={() => navigation.navigate('InKuwait')}
          rightIcon={
            <Icon
              name="filter"
              type="material-community"
              color="white"
              underlayColor="transparent"
              onPress={() => navigation.navigate('FaqFilter')}
              underlayColor="transparent"
            />
          }
          onSearchQuery={onSearch}
          onSubmitQuery={() => getFaqsList(filtersFaq)}
        />

        <View style={styles.headerBlock}>
          <TextPicker
            dataList={filters}
            onPressElement={this.handlePressElementFilter}
          />
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ElementFlatList
              item={item}
              onPressElement={this.handlePressElement}
            />
          )}
          keyExtractor={item => item.pk.toString()}
          refreshing={loading}
          onRefresh={this.onRefresh}
        />
        {authStatus ? (
          <Icon
            name="ios-add"
            type="ionicon"
            color={colors.HEADER}
            underlayColor="transparent"
            iconStyle={{
              width: '100%',
            }}
            containerStyle={styles.iconAddContainer}
            onPress={() => {
              this.props.navigation.navigate('FaqAsk');
            }}
          />
        ) : null}
      </View>
    );
  }
}

export default FaqScreen;
