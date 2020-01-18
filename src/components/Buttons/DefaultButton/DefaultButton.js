import React, { Component } from 'react';
import { Button } from 'react-native-elements';

import styles from './styles';

class DefaultButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      title,
      onPressButton,
      disabled,
      buttonStyle,
      buttonContainer,
    } = this.props;

    return (
      <Button
        disabled={disabled}
        title={title}
        titleStyle={styles.btnTitle}
        buttonStyle={[styles.btnStyle, buttonStyle]}
        containerStyle={[styles.btnContainer, buttonContainer]}
        onPress={onPressButton}
      />
    );
  }
}

export default DefaultButton;
