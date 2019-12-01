import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import TextPicker from '../../../../components/TextPicker';

import { getQuestions } from '../../../../redux/actions/inKuwaitAction';

import { colors } from '../../../../constants';
import styles from './styles';
import HeaderInKuwaitCategory from '../../../../components/Headers/HeaderInKuwaitCategory';

const ElementFlatList = ({ item, onPressElement }) => (
  <TouchableOpacity style={styles.elementFL} onPress={() => onPressElement()}>
    <View style={styles.roundView}>
      <Text style={styles.roundText}>{item.answer_count}</Text>
    </View>
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={styles.textElement}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

class FaqScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'top',
      filters: [
        {
          id: 0,
          title: 'Top Question',
          active: true,
          func: () => {
            this.setState({ activeFilter: 'top' });
          },
        },
        {
          id: 1,
          title: 'Recent Questions',
          active: false,
          func: () => {
            this.setState({ activeFilter: 'recent' });
          },
        },
      ],
    };
  }

  componentDidMount = () => {
    this.props.getQuestionsList();
  };

  handlePressElementFilter = id => {
    const { filters } = this.state;

    const newFilters = filters.map(item =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );

    this.setState({
      filters: newFilters,
    });
  };

  handlePressElement = () => {
    this.props.navigation.navigate('FaqDetail');
  };

  render() {
    const { filters } = this.state;
    const { data, navigation } = this.props;

    return (
      <View style={styles.container}>
        <HeaderInKuwaitCategory
          title="FAQ"
          leftIcon={true}
          onPressLeftIcon={() => navigation.navigate('InKuwait')}
          rightIcon={
            <Icon
              name="filter"
              type="material-community"
              color="white"
              underlayColor="transparent"
              onPress={() => navigation.navigate('InKuwaitFilter')}
            />
          }
        />
        <View style={styles.headerBlock}>
          <TextPicker
            dataList={filters}
            onPressElement={this.handlePressElementFilter}
          />
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ElementFlatList
              item={item}
              onPressElement={this.handlePressElement}
            />
          )}
          keyExtractor={item => item.pk}
        />
        <Icon
          name="ios-add"
          type="ionicon"
          color={colors.HEADER}
          iconStyle={{
            width: '100%',
          }}
          containerStyle={styles.iconAddContainer}
          onPress={() => {
            this.props.navigation.navigate('FaqAsk');
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.inKuwait.questionsList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestionsList: () => {
      dispatch(getQuestions());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqScreen);
