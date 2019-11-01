import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

import globalStyles from '../../../constants/globalStyles';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../../constants/colors';

const ElementFl = ({ element, onChange }) => (
  <View style={styles.elementContainer}>
    <CheckBox
      checked={element.checked}
      iconType="ionicon"
      checkedIcon="ios-checkmark-circle"
      uncheckedIcon="ios-radio-button-off"
      checkedColor={colors.HEADER}
      containerStyle={{ marginRight: 15 }}
      onPress={() => {
        onChange(element.title);
      }}
    />
    <Text style={[globalStyles.gothamBook, styles.textElement]}>
      {' '}
      {element.title}
    </Text>
    <Text style={[globalStyles.gothamBook, styles.textCount]}>
      {element.count}
    </Text>
  </View>
);

class InKuwaitFilterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        { id: 0, title: 'Education', count: 10, checked: false },
        { id: 1, title: 'Health', count: 3, checked: false },
        { id: 2, title: 'Personal life', count: 5, checked: false },
        { id: 3, title: 'Adventures', count: 3, checked: false },
        { id: 4, title: 'Childs', count: 13, checked: false },
        { id: 5, title: 'Love', count: 6, checked: false },
      ],
      filters: {
        date: true,
        answers: false,
      },
    };
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

  handleChangeChecked = elementName => {
    const newCategory = this.state.category.map(item =>
      item.title === elementName
        ? { ...item, checked: !item.checked }
        : { ...item },
    );
    this.setState({
      category: newCategory,
    });
  };

  render() {
    const { filters } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={[globalStyles.gothamBold, styles.textHeader]}>
            SORTING BY
          </Text>
          <View style={styles.containerRow}>
            <TouchableOpacity
              onPress={() => this.handleChangeSorting('date')}
              style={filters.date ? styles.activeBlock : styles.unactiveBlock}>
              <Text
                style={[
                  globalStyles.gothamMediumRegular,
                  filters.date ? styles.activeText : styles.unactiveText,
                ]}>
                Date
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.handleChangeSorting('answers')}
              style={
                filters.answers ? styles.activeBlock : styles.unactiveBlock
              }>
              <Text
                style={[
                  globalStyles.gothamMediumRegular,
                  filters.answers ? styles.activeText : styles.unactiveText,
                ]}>
                Answers
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[globalStyles.gothamBold, styles.textHeader]}>
            SELECT CATEGORY
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.category}
            renderItem={({ item }) => (
              <ElementFl element={item} onChange={this.handleChangeChecked} />
            )}
            contentContainerStyle={{ marginTop: 10 }}
            ItemSeparatorComponent={() => (
              <View style={{ borderWidth: 0.3, borderColor: 'silver' }} />
            )}
          />
        </View>
      </View>
    );
  }
}

export default InKuwaitFilterScreen;
