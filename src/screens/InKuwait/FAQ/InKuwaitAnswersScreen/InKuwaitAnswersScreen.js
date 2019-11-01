import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Button, Icon, Divider } from 'react-native-elements';

import globalStyles from '../../../../constants/globalStyles';
import styles from './styles';

const ElementFl = ({ element }) => (
  <View style={styles.containerElement}>
    <View style={styles.rowBlock}>
      <Text style={[globalStyles.gothamMediumRegular, styles.author]}>
        {element.author}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="clock" type="octicon" color={'silver'} />
        <Text style={[globalStyles.gothamBook, styles.time]}>
          {element.date}
        </Text>
      </View>
    </View>
    <Text style={[globalStyles.gothamBook, styles.answer]}>
      {element.answer}
    </Text>
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
);

class InKuwaitAnswersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          author: 'Chester Sparks',
          date: '22.09.18',
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          id: 2,
          author: 'Chester Sparks',
          date: '22.09.18',
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          id: 3,
          author: 'Chester Sparks',
          date: '22.09.18',
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
      ],
    };
  }
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => <ElementFl element={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    );
  }
}

export default InKuwaitAnswersScreen;
