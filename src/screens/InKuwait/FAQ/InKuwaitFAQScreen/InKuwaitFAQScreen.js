import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { getQuestions } from '../../../../redux/actions/inKuwaitAction';

import globalStyles from '../../../../constants/globalStyles';
import styles from './styles';
import { colors } from '../../../../constants/colors';

const ElementFlatList = ({ item, onPressElement }) => (
  <TouchableOpacity style={styles.elementFL} onPress={() => onPressElement()}>
    <View style={styles.roundView}>
      <Text style={[globalStyles.gothamBook, styles.roundText]}>
        {item.answer_count}
      </Text>
    </View>
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={[globalStyles.gothamBook, styles.textElement]}>
        {item.title}
      </Text>
    </View>
  </TouchableOpacity>
);

class InKuwaitFAQScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filters: {
        topQuestion: true,
        recentQuestion: false,
      },
    };
  }

  componentDidMount = () => {
    this.props.getQuestionsList();
  };

  handleChangeFilter = name => {
    this.setState({
      filters: {
        topQuestion: false,
        recentQuestion: false,
        [name]: true,
      },
    });
  };

  handlePressElement = () => {
    this.props.navigation.navigate('InKuwaitDetail');
  };

  render() {
    const { filters } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <TouchableOpacity
            onPress={() => {
              this.handleChangeFilter('topQuestion');
            }}
            style={
              filters.topQuestion
                ? styles.selectBlockActive
                : styles.selectBlock
            }>
            <Text
              style={[
                globalStyles.gothamMediumRegular,
                filters.topQuestion ? styles.textActive : styles.textUnactive,
              ]}>
              Top Questions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.handleChangeFilter('recentQuestion');
            }}
            style={
              filters.recentQuestion
                ? styles.selectBlockActive
                : styles.selectBlock
            }>
            <Text
              style={[
                globalStyles.gothamMediumRegular,
                filters.recentQuestion
                  ? styles.textActive
                  : styles.textUnactive,
              ]}>
              Recent Questions
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <ElementFlatList
              item={item}
              onPressElement={this.handlePressElement}
            />
          )}
          keyExtractor={(item, index) => item.pk}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 10,
          }}
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
            this.props.navigation.navigate('InKuwaitAsk');
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

export default connect(mapStateToProps, mapDispatchToProps)(InKuwaitFAQScreen);
