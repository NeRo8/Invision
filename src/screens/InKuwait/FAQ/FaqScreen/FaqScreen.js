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
      activeFilter: 'top',
      filters: [
        {
          id: 0,
          title: 'Top Question',
          active: true,
          func: () => {
            this.setState({ activeFilter: 'top' });
          },
        },
        {
          id: 1,
          title: 'Recent Questions',
          active: false,
          func: () => {
            this.setState({ activeFilter: 'recent' });
          },
        },
      ],
    };
  }

  componentDidMount = () => {
    const { getFaqsList } = this.props;

    getFaqsList();
  };

  handlePressElementFilter = id => {
    const { filters } = this.state;

    const newFilters = filters.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    this.setState({
      filters: newFilters,
    });
  };

  handlePressElement = elementId => {
    this.props.navigation.navigate('FaqDetail', { id: elementId });
  };

  render() {
    const { filters } = this.state;
    const { data, navigation, onSearch, getFaqsList, filtersFaq } = this.props;

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
        />
        <Icon
          name="ios-add"
          type="ionicon"
          color={colors.HEADER}
          iconStyle={{
            width: '100%',
          }}
          containerStyle={styles.iconAddContainer}
          onPress={() => {
            this.props.navigation.navigate('FaqAsk');
          }}
        />
      </View>
    );
  }
}

export default FaqScreen;
