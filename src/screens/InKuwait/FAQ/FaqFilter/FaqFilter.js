import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

import { DefaultButton } from '../../../../components/Buttons';

import styles from './styles';
import { colors } from '../../../../constants';

const ElementFl = ({ element, activeElement, onPressElement }) => (
  <View style={styles.elementContainer}>
    <CheckBox
      checked={activeElement === element.pk ? true : false}
      iconType="ionicon"
      checkedIcon="ios-checkmark-circle"
      uncheckedIcon="ios-radio-button-off"
      checkedColor={colors.HEADER}
      containerStyle={{ marginRight: 15 }}
      onPress={() => onPressElement(element.pk)}
    />
    <Text style={styles.textElement}>{element.name}</Text>
    <Text style={styles.textCount}>{element.count_of_questions}</Text>
  </View>
);

class FaqFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        date: true,
        answers: false,
      },
      activeCategory: null,
    };
  }

  componentDidMount() {
    const { getCategoriesList } = this.props;

    getCategoriesList();
  }

  handleChangeSorting = name => {
    this.setState({
      filters: {
        date: false,
        answers: false,
        [name]: true,
      },
    });
  };

  handlePressElement = id => {
    const { setFilters } = this.props;

    this.setState({
      activeCategory: id,
    });

    setFilters('category', id);
  };

  handlePressDone = () => {
    const { filters, getFaqsList, navigation } = this.props;

    getFaqsList(filters);

    navigation.goBack();
  };

  render() {
    const { filters, activeCategory } = this.state;
    const { categories } = this.props;

    return (
      <SafeAreaView style={styles.container}>
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
                  activeElement={activeCategory}
                  onPressElement={this.handlePressElement}
                />
              )}
              contentContainerStyle={{ marginTop: 10 }}
              ItemSeparatorComponent={() => <View style={styles.divider} />}
            />
          </View>
          <DefaultButton title="Done" onPressButton={this.handlePressDone} />
        </View>
      </SafeAreaView>
    );
  }
}

export default FaqFilter;
