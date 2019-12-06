import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import styles from './styles';
import globalStyles from '../../../../constants/globalStyles';

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
    const { questionDetail } = this.props;

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
              />
              <Text style={styles.blockText}>{questionDetail.created}</Text>
            </View>
            <View style={styles.block}>
              <Icon
                name="chat"
                type="material-community"
                color={'#63A3FF'}
                iconStyle={{ marginRight: 10 }}
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

        <Button
          title="Write comment"
          titleStyle={styles.btnTitle}
          buttonStyle={styles.buttonSend}
          onPress={() => this.props.navigation.navigate('FaqCreateComment')}
        />
      </ScrollView>
    );
  }
}

export default FaqDetail;
