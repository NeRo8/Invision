import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import LoadingStatus from '../../../../components/LoadingStatus';

import { DefaultButton } from '../../../../components/Buttons';

import styles from './styles';

class FaqDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getQuestionDetail, navigation } = this.props;

    const id = navigation.getParam('id', null);

    getQuestionDetail(id);
  }

  render() {
    const { questionDetail, authStatus, loading } = this.props;

    if (loading) {
      return <LoadingStatus />;
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titleHeader}>{questionDetail.title}</Text>
        <View>
          <View style={styles.rowBlock}>
            <View style={styles.block}>
              <Icon
                name="clock"
                type="octicon"
                color={'#63A3FF'}
                iconStyle={{ marginRight: 10 }}
                underlayColor="transparent"
              />
              <Text style={styles.blockText}>{questionDetail.created}</Text>
            </View>
            <View style={styles.block}>
              <Icon
                name="chat"
                type="material-community"
                color={'#63A3FF'}
                iconStyle={{ marginRight: 10 }}
                underlayColor="transparent"
              />
              <Text style={styles.blockText}>
                {questionDetail.answer_count}
              </Text>
            </View>
          </View>
          <View style={styles.rowBlock}>
            <View style={styles.block}>
              <Icon
                name="ios-person"
                type="ionicon"
                color={'#63A3FF'}
                iconStyle={{ marginRight: 10 }}
                underlayColor="transparent"
              />
              <Text style={styles.blockText}>
                {questionDetail.author_full_name}
              </Text>
            </View>
            <View style={styles.block}>
              <Icon
                name="tag-outline"
                type="material-community"
                color={'#63A3FF'}
                iconStyle={{
                  marginRight: 10,
                  transform: [{ rotate: '90deg' }],
                }}
                underlayColor="transparent"
              />
              <Text style={styles.blockText}>
                {questionDetail.category.name}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.description}>{questionDetail.description}</Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('FaqAnswers')}
          style={styles.pickerBlock}>
          <Text style={styles.blockBottomText}>Answers</Text>
          <Text style={[styles.blockBottomText, { color: 'black' }]}>
            {questionDetail.answer_count}
          </Text>
        </TouchableOpacity>
        {authStatus ? (
          <DefaultButton
            title="Write comment"
            onPressButton={() =>
              this.props.navigation.navigate('FaqCreateComment')
            }
          />
        ) : null}
      </ScrollView>
    );
  }
}

export default FaqDetail;
