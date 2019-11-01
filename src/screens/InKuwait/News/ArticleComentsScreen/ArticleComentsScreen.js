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

import styles from './styles';
import globalStyles from '../../../../constants/globalStyles';
import { colors } from '../../../../constants/colors';

const ElementFlatList = ({ item }) => (
  <View>
    <View style={styles.comentView}>
      <View style={styles.topOfComent}>
        <Text style={[globalStyles.gothamMediumRegular, styles.userName]}>
          {item.userName}
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
            {item.date}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.coment}>{item.coment}</Text>
      </View>
      <View style={styles.buttonsView}>
        <Button
          containerStyle={styles.button}
          buttonStyle={{
            backgroundColor: 'rgba(240,91,136,0.1)',
            borderRadius: 0,
          }}
          title="Report"
          titleStyle={[
            globalStyles.gothamBook,
            { fontSize: 13, lineHeight: 24, color: colors.NOTIF_ICON },
          ]}
          icon={
            <Icon
              name="md-flag"
              type="ionicon"
              color={colors.NOTIF_ICON}
              containerStyle={{ marginRight: 8 }}
            />
          }
          style={styles.button}
        />
        <Button
          containerStyle={styles.button}
          buttonStyle={{
            backgroundColor: 'rgba(10,104,239,0.1)',
            borderRadius: 0,
          }}
          title="Reply"
          titleStyle={[
            globalStyles.gothamBook,
            { fontSize: 13, lineHeight: 24, color: colors.HEADER },
          ]}
          icon={
            <Icon
              name="reply"
              type="material-community"
              color={colors.HEADER}
              containerStyle={{ marginRight: 8 }}
            />
          }
          style={styles.button}
        />
      </View>
    </View>
    <Divider
      style={{ backgroundColor: colors.ICON_GREY_COLOR, marginTop: 20 }}
    />
  </View>
);

class ArticleComentsScreen extends Component {
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

  onPressWriteComment = () => {
    this.props.navigation.navigate('NewsWriteComment');
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.wraper}>
            <FlatList
              data={this.state.coments}
              renderItem={({ item }) => <ElementFlatList item={item} />}
            />
          </View>
        </ScrollView>
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

export default ArticleComentsScreen;
