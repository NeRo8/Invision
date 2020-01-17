import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Input, Icon, Button } from 'react-native-elements';

import { colors, globalStyles } from '../../../constants';

import styles from './styles';

import { translate } from '../../../i18n';

class AdsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressCategory = () => {
    const { navigation } = this.props;
    navigation.navigate('Category');
  };

  handlePressFilters = () => {
    const { navigation } = this.props;
    navigation.navigate('Filters');
  };

  handlePressSubmit = () => {
    const { getAdsList } = this.props;
    getAdsList();
  };

  render() {
    const { setFilters, filters } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Input
            inputStyle={globalStyles.gothamBook}
            leftIcon={() => (
              <Icon
                name="ios-search"
                type="ionicon"
                color={colors.UNACTIVE}
                size={25}
              />
            )}
            value={filters.q}
            placeholder={translate('searchAd')}
            placeholderTextColor={colors.UNACTIVE}
            leftIconContainerStyle={styles.leftIconContainer}
            inputContainerStyle={styles.inputContainerS}
            containerStyle={styles.inputContainer}
            returnKeyType="search"
            onChangeText={text => setFilters(text)}
            onSubmitEditing={this.handlePressSubmit}
          />
        </View>
        <View style={styles.filtersContainer}>
          <View style={styles.btnContainer}>
            <Button
              title={translate('chooseCategory')}
              titleStyle={styles.btnTitleStyle}
              buttonStyle={styles.btnStyle}
              containerStyle={{ marginRight: 5 }}
              onPress={this.handlePressCategory}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button
              style={{ marginLeft: 5 }}
              icon={{
                name: 'filter',
                type: 'material-community',
                color: 'white',
                size: 20,
              }}
              title={translate('filters')}
              titleStyle={styles.btnTitleStyle}
              buttonStyle={styles.btnStyle}
              containerStyle={{ marginLeft: 5 }}
              onPress={this.handlePressFilters}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(AdsHeader);
