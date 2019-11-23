import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Divider, Icon } from 'react-native-elements';

import { connect } from 'react-redux';

import styles from './styles';
import globalStyles from '../../../constants/globalStyles';

import { getCategories } from '../../../redux/actions/adsAction';

const ElementFlatList = ({ item }) => (
  <TouchableOpacity onPress={() => {}}>
    <View style={styles.elementContainer}>
      <View style={styles.elementIcon}>
        <Image
          source={item.icon}
          style={{ width: null, height: null, flex: 1 }}
        />
      </View>
      <Text style={[globalStyles.gothamBook, styles.elementTitle]}>
        {item.name}
      </Text>
      <Icon
        name="chevron-right"
        type="material-community"
        color="silver"
        size={32}
      />
    </View>
  </TouchableOpacity>
);

class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getCategoriesList();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => <ElementFlatList item={item} />}
          keyExtractor={item => item.pk.toString()}
          ItemSeparatorComponent={() => (
            <Divider style={styles.elementDivider} />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.ads.categoriesList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategoriesList: () => {
      dispatch(getCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
