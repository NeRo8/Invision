import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import styles from './styles';

const ElementFl = ({ element, onPressReply }) => {
  var marginLeft = 0;
  if (element.parent !== null) {
    marginLeft = 30;
  }
  return (
    <View style={[styles.containerElement, { marginLeft: marginLeft }]}>
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
          onPress={() => onPressReply(element.pk)}
        />
      </View>
    </View>
  );
};

class FaqAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressElement = id => {
    const { navigation } = this.props;

    navigation.navigate('FaqCreateComment', { parent: id });
  };

  render() {
    const { answers } = this.props;
    return (
      <FlatList
        data={answers}
        renderItem={({ item }) => (
          <ElementFl element={item} onPressReply={this.handlePressElement} />
        )}
        keyExtractor={item => item.pk}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    );
  }
}

export default FaqAnswers;
