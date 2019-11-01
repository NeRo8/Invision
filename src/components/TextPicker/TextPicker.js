import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Element = ({ elem, onPressElement, onAction }) => (
  <TouchableOpacity
    onPress={() => {
      onPressElement(elem.id);
      elem.func();
    }}
    style={elem.active ? styles.elementActive : styles.elementUnactive}>
    <Text
      style={
        elem.active ? styles.elementTextActive : styles.elementTextUnactive
      }>
      {elem.title}
    </Text>
  </TouchableOpacity>
);

class TextPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.dataList.map(element => (
          <Element elem={element} onPressElement={this.props.onPressElement} />
        ))}
      </View>
    );
  }
}

export default TextPicker;
