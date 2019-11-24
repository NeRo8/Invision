import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

import { colors, globalStyles } from '../../../../constants';
import styles from './styles';

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

class OrganisationAndServicesFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        { id: 0, title: 'University in Kuwait', count: 10, checked: false },
        { id: 1, title: 'Museums', count: 3, checked: false },
        { id: 2, title: 'Monuments', count: 5, checked: false },
        { id: 3, title: 'Restaurants', count: 3, checked: false },
        { id: 4, title: 'View points', count: 13, checked: false },
        { id: 5, title: 'Geast house', count: 6, checked: false },
        { id: 6, title: 'Street food', count: 6, checked: false },
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
          <View style={styles.containerRow}>
            <TouchableOpacity
              onPress={() => this.handleChangeSorting('services')}
              style={
                filters.services ? styles.activeBlock : styles.unactiveBlock
              }>
              <Text
                style={[
                  globalStyles.gothamMediumRegular,
                  filters.services ? styles.activeText : styles.unactiveText,
                ]}>
                Services
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.handleChangeSorting('organisations')}
              style={
                filters.organisations
                  ? styles.activeBlock
                  : styles.unactiveBlock
              }>
              <Text
                style={[
                  globalStyles.gothamMediumRegular,
                  filters.organisations
                    ? styles.activeText
                    : styles.unactiveText,
                ]}>
                Organisations
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
        <Button
          title="Done"
          titleStyle={[globalStyles.gothamBold, styles.btnTitle]}
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default OrganisationAndServicesFilter;
