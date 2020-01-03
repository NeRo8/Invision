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
          value: 'upcoming',
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
          value: 'previous',
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
    const { getEventsList, filters } = this.props;

    getEventsList(filters);
  };

  handlePressFilter = id => {
    const { setFilters, getEventsList, filters } = this.props;

    const newFilter = this.state.filters.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    newFilter.forEach(item => {
      item.active === true ? setFilters(item.value) : null;
    });

    this.setState({
      filters: newFilter,
    });

    getEventsList(filters);
  };

  render() {
    const {
      navigation,
      eventsList,
      onSearch,
      getEventsList,
      filters,
    } = this.props;
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
              onPress={() => {
                this.props.setLoad();
                navigation.navigate('InKuwaitEventsFilter');
              }}
            />
          }
          onSearchQuery={onSearch}
          onSubmitQuery={() => getEventsList(filters)}
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
                  this.props.setLoad();
                  navigation.navigate('InKuwaitEventsDetail', { id: item.pk });
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
