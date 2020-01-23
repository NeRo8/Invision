import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

import { colors } from '../../../../constants';

import { DefaultButton } from '../../../../components/Buttons';

import styles from './styles';

const ElementFl = ({ element, activeElement, onPressElement }) => (
  <View style={styles.elementContainer}>
    <CheckBox
      checked={activeElement === element.pk ? true : false}
      iconType="ionicon"
      checkedIcon="ios-checkmark-circle"
      uncheckedIcon="ios-radio-button-off"
      checkedColor={colors.HEADER}
      containerStyle={{ marginRight: 15 }}
      onPress={() => {
        onPressElement(element.pk);
      }}
    />
    <Text style={styles.textElement}>{element.name}</Text>
  </View>
);

class NewsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        date: true,
        answers: false,
      },
    };
  }

  componentDidMount() {
    const { getCategories } = this.props;

    getCategories();
  }

  handleChangeSorting = name => {
    const { setFilters } = this.props;
    this.setState({
      filters: {
        date: false,
        answers: false,
        [name]: true,
      },
    });

    setFilters('order_by', name);
  };

  handlePressCategory = id => {
    const { setFilters } = this.props;

    setFilters('category', id);
  };

  handlePressDone = () => {
    const { getNewsList, newsFilters, navigation } = this.props;

    getNewsList(newsFilters);
    navigation.goBack();
  };

  render() {
    const { filters } = this.state;

    const { categories, newsFilters } = this.props;

    return (
      <SafeAreaView style={styles.containerGlobal}>
        <View style={styles.container}>
          <View>
            <Text style={styles.textHeader}>SORTING BY</Text>
            <View style={styles.containerRow}>
              <TouchableOpacity
                onPress={() => this.handleChangeSorting('date')}
                style={
                  filters.date ? styles.activeBlock : styles.unactiveBlock
                }>
                <Text
                  style={
                    filters.date ? styles.activeText : styles.unactiveText
                  }>
                  Date
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.handleChangeSorting('answers')}
                style={
                  filters.answers ? styles.activeBlock : styles.unactiveBlock
                }>
                <Text
                  style={
                    filters.answers ? styles.activeText : styles.unactiveText
                  }>
                  Answers
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.textHeader}>SELECT CATEGORY</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={categories}
              renderItem={({ item }) => (
                <ElementFl
                  element={item}
                  activeElement={newsFilters.category}
                  onPressElement={this.handlePressCategory}
                />
              )}
              contentContainerStyle={{ marginTop: 10 }}
              ItemSeparatorComponent={() => (
                <View style={{ borderWidth: 0.3, borderColor: 'silver' }} />
              )}
              keyExtractor={item => item.pk.toString()}
            />
          </View>
          <DefaultButton title="Done" onPressButton={this.handlePressDone} />
        </View>
      </SafeAreaView>
    );
  }
}

export default NewsFilter;
