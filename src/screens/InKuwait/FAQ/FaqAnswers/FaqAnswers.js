import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Button, Icon, Divider } from 'react-native-elements';

import styles from './styles';

const ElementFl = ({ element }) => (
  <View style={styles.containerElement}>
    <View style={styles.rowBlock}>
      <Text style={styles.author}>{element.author_full_name}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name="clock"
          type="octicon"
          color={'silver'}
          underlayColor="transparent"
        />
        <Text style={styles.time}>{element.created}</Text>
      </View>
    </View>
    <Text style={styles.answer}>{element.description}</Text>
    <View style={{ flexDirection: 'row' }}>
      <Button
        icon={{
          name: 'ios-flag',
          type: 'ionicon',
          color: '#F05B88',
        }}
        title="Report"
        titleStyle={styles.btnTitleReport}
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
        titleStyle={styles.btnTitleReply}
        buttonStyle={styles.btnStyleReply}
        containerStyle={styles.btnContainer}
      />
    </View>
  </View>
);

class FaqAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { answers } = this.props;
    return (
      <FlatList
        data={answers}
        renderItem={({ item }) => <ElementFl element={item} />}
        keyExtractor={item => item.pk}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    );
  }
}

export default FaqAnswers;
