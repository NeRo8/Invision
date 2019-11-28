import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { ElementListEvents } from '../../../../components/ElementLists';
import TextPicker from '../../../../components/TextPicker';

import { colors } from '../../../../constants';
import styles from './styles';

import { getEvents } from '../../../../redux/actions/inKuwaitAction';

class EventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEvents: [
        {
          id: 0,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
        {
          id: 1,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
        {
          id: 2,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
        {
          id: 3,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
        {
          id: 4,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
        {
          id: 5,
          image: require('../../../../assets/images/element.jpg'),
          title: 'Lorem ipsum is simply dummy text',
          date: 'Oct 11-12',
          favorite: false,
        },
      ],

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

  handlePressHeart = id => {
    const newDataEve = this.state.dataEvents.map(item =>
      item.id === id ? { ...item, favorite: !item.favorite } : { ...item },
    );
    this.setState({
      dataEvents: newDataEve,
    });
  };

  handlePressFilter = id => {
    const { filters } = this.state;

    const newFilter = filters.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    this.setState({
      filters: newFilter,
    });
  };

  componentDidMount = () => {
    this.props.getEventsList();
  };

  render() {
    return (
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
          data={this.props.dataEvents}
          renderItem={({ item }) => (
            <ElementListEvents
              element={item}
              onPressProduct={() => {
                this.props.navigation.navigate('InKuwaitEventsDetail');
              }}
              onPressHeart={this.handlePressHeart}
              grayscale={this.state.grayscale}
            />
          )}
          keyExtractor={(item, index) => item.id}
        />
        <View style={styles.btnLContainer}>
          <Icon
            name="map-pin"
            type="feather"
            color={colors.HEADER}
            iconStyle={styles.icon}
            onPress={() => {
              this.props.navigation.navigate('InKuwaitEventsMap');
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataEvents: state.inKuwait.eventsList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventsList: () => {
      dispatch(getEvents());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
