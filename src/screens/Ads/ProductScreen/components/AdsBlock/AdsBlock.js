import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ElementListAds } from '../../../../../components/ElementLists';

import styles from './styles';

class AdsBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressAds = id => {
    const { getAdData } = this.props;

    getAdData(id);
  };

  render() {
    const { adsList } = this.props;
    return (
      <View>
        <Text style={styles.headerText}>SIMILAR ADS</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={adsList}
          renderItem={({ item }) => (
            <ElementListAds item={item} onPressProduct={this.handlePressAds} />
          )}
          keyExtractor={item => item.pk.toString()}
          style={{ height: 500 }}
        />
      </View>
    );
  }
}

export default AdsBlock;
