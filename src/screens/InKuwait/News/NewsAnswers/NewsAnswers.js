import React, { Component } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { Icon, Button, Divider } from 'react-native-elements';
import Moment from 'moment';

import styles from './styles';
import { colors } from '../../../../constants';

const ElementFlatList = ({ item, onPressReport, onPressReply, authStatus }) => (
  <View style={item.parent !== null ? { marginLeft: 20 } : null}>
    <View style={styles.comentView}>
      <View style={styles.topOfComent}>
        <Text style={styles.userName}>
          {item.user__first_name} {item.user__last_name}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            size={16}
            name="clock"
            type="octicon"
            color={colors.UNACTIVE}
            underlayColor="transparent"
            containerStyle={{ marginRight: 8 }}
          />
          <Text style={styles.date}>
            {Moment(item.created).format('DD.MM.YY')}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.coment}>{item.description}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button
          disabled={authStatus}
          icon={{
            name: 'ios-flag',
            type: 'ionicon',
            color: '#F05B88',
          }}
          title="Report"
          titleStyle={styles.btnTitleReport}
          buttonStyle={styles.btnStyleReport}
          containerStyle={styles.btnContainer}
          onPress={() => onPressReport(item.pk)}
        />
        <Button
          disabled={authStatus}
          icon={{
            name: 'ios-undo',
            type: 'ionicon',
            color: '#0A68EF',
          }}
          title="Reply"
          titleStyle={styles.btnTitleReply}
          buttonStyle={styles.btnStyleReply}
          containerStyle={styles.btnContainer}
          onPress={() => onPressReply(item.pk)}
        />
      </View>
    </View>
    <Divider
      style={{ backgroundColor: colors.ICON_GREY_COLOR, marginTop: 20 }}
    />
  </View>
);

class NewsAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressWriteComment = () => {
    const { navigation } = this.props;
    navigation.navigate('NewsCreateComment');
  };

  handlePressReport = id => {
    const { token, setAnswerReport } = this.props;

    setAnswerReport(id, token);
  };

  handlePressReply = answerdId => {
    const { navigation } = this.props;

    navigation.navigate('NewsCreateComment', {
      id: answerdId,
    });
  };

  render() {
    const { comments, authStatus } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={comments}
            renderItem={({ item }) => (
              <ElementFlatList
                item={item}
                onPressReport={this.handlePressReport}
                onPressReply={this.handlePressReply}
                authStatus={authStatus ? false : true}
              />
            )}
            keyExtractor={item => item.pk.toString()}
          />

          <Button
            disabled={authStatus ? false : true}
            titleStyle={styles.btnTitle}
            buttonStyle={styles.buttonWrite}
            title="Write comment"
            onPress={this.onPressWriteComment}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default NewsAnswers;
