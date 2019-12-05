import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

import { colors, globalStyles } from '../../../../constants';
import styles from './styles';

const ElementFl = ({ element, activeElement, onPressElement }) => (
  <View style={styles.elementContainer}>
    <CheckBox
      checked={element.pk === activeElement ? true : false}
      iconType="ionicon"
      checkedIcon="ios-checkmark-circle"
      uncheckedIcon="ios-radio-button-off"
      checkedColor={colors.HEADER}
      containerStyle={{ marginRight: 15 }}
      onPress={() => {
        onPressElement(element.pk);
      }}
    />
    <Text style={[globalStyles.gothamBook, styles.textElement]}>
      {element.name}
    </Text>
  </View>
);

class OrganisationAndServicesFilter extends Component {
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

  setActiveCategory = id => {
    const { setCategoryFilter } = this.props;

    this.setState({
      activeCategory: id,
    });

    setCategoryFilter(id);
  };

  handlePressDone = () => {
    const { navigation, getServiceList, filters } = this.props;

    getServiceList(filters);

    navigation.goBack();
  };

  render() {
    const { categories } = this.props;
    const { filters, activeCategory } = this.state;

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
          <Text style={styles.textHeader}>SELECT CATEGORY</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) => (
              <ElementFl
                element={item}
                activeElement={activeCategory}
                onPressElement={this.setActiveCategory}
              />
            )}
            contentContainerStyle={{ marginTop: 10 }}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
          />
        </View>
        <Button
          title="Done"
          titleStyle={styles.btnTitle}
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={this.handlePressDone}
        />
      </View>
    );
  }
}

export default OrganisationAndServicesFilter;
