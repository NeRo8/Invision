import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import { Icon, Button, Divider } from 'react-native-elements';
import Moment from 'moment';

import styles from './styles';
import { colors, globalStyles } from '../../../../constants';

const ElementFlatList = ({ item }) => (
  <View>
    <View style={styles.comentView}>
      <View style={styles.topOfComent}>
        <Text style={[globalStyles.gothamMediumRegular, styles.userName]}>
          {item.user__first_name} {item.user__last_name}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            size={16}
            name="clock"
            type="octicon"
            color={colors.UNACTIVE}
            containerStyle={{ marginRight: 8 }}
          />
          <Text style={[globalStyles.gothamBook, styles.date]}>
            {Moment(item.created).format('DD.MM.YY')}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.coment}>{item.description}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button
          icon={{
            name: 'ios-flag',
            type: 'ionicon',
            color: '#F05B88',
          }}
          title="Report"
          titleStyle={[globalStyles.gothamBook, styles.btnTitleReport]}
          buttonStyle={styles.btnStyleReport}
          containerStyle={styles.btnContainer}
        />
        <Button
          icon={{
            name: 'ios-undo',
            type: 'ionicon',
            color: '#0A68EF',
          }}
          title="Reply"
          titleStyle={[globalStyles.gothamBook, styles.btnTitleReply]}
          buttonStyle={styles.btnStyleReply}
          containerStyle={styles.btnContainer}
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
    this.state = {
      coments: [
        {
          id: 0,
          userName: 'Tyler Hicks',
          date: '22.09.18',
          coment:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          id: 1,
          userName: 'Billy Weaver',
          date: '22.09.18',
          coment:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          id: 2,
          userName: 'Jordan Mann',
          date: '22.09.18',
          coment:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          id: 3,
          userName: 'Alex Synth',
          date: '22.09.18',
          coment:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
      ],
    };
  }
  async componentDidMount() {
    const { navigation } = this.props;
  }
  onPressWriteComment = () => {
    this.props.navigation.navigate('NewsCreateComment');
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View style={styles.wraper}>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 15 }}
            data={navigation.getParam('comments')}
            renderItem={({ item }) => <ElementFlatList item={item} />}
            keyExtractor={item => item.pk}
          />
        </View>

        <Button
          titleStyle={[
            globalStyles.gothamBold,
            { color: 'white', fontSize: 15, lineHeight: 24 },
          ]}
          buttonStyle={styles.buttonWrite}
          title="Write comment"
          onPress={this.onPressWriteComment}
        />
      </View>
    );
  }
}

export default NewsAnswers;
