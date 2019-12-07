import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

import { ElementListEvents } from '../../../../components/ElementLists';
import TextPicker from '../../../../components/TextPicker';
import { HeaderInKuwaitCategory } from '../../../../components/Headers';

import { colors } from '../../../../constants';
import styles from './styles';

class EventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        {
          id: 0,
          title: 'Upcoming Events',
          active: true,
          func: () => {
            this.setState({
              grayscale: false,
            });
          },
        },
        {
          id: 1,
          title: 'Previous Events',
          active: false,
          func: () => {
            this.setState({
              grayscale: true,
            });
          },
        },
      ],

      grayscale: false,
    };
  }

  componentDidMount = () => {
    const { getEventsList } = this.props;

    getEventsList();
  };

  handlePressHeart = id => {};

  handlePressFilter = id => {
    const { filters } = this.state;

    const newFilter = filters.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    this.setState({
      filters: newFilter,
    });
  };

  render() {
    const { navigation, eventsList } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <HeaderInKuwaitCategory
          title="Events"
          leftIcon={true}
          onPressLeftIcon={() => navigation.navigate('InKuwait')}
          rightIcon={
            <Icon
              name="filter"
              type="material-community"
              color="white"
              underlayColor="transparent"
              onPress={() => navigation.navigate('InKuwaitEventsFilter')}
            />
          }
        />
        <View style={styles.container}>
          <View style={styles.headerPicker}>
            <TextPicker
              dataList={this.state.filters}
              onPressElement={this.handlePressFilter}
            />
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={eventsList}
            renderItem={({ item }) => (
              <ElementListEvents
                element={item}
                onPressProduct={() => {
                  navigation.navigate('InKuwaitEventsDetail');
                }}
                grayscale={this.state.grayscale}
              />
            )}
            keyExtractor={(item, index) => item.pk.toString()}
          />
          <View style={styles.btnLContainer}>
            <Icon
              name="map-pin"
              type="feather"
              color={colors.HEADER}
              iconStyle={styles.icon}
              onPress={() => {
                navigation.navigate('InKuwaitEventsMap');
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default EventsScreen;
