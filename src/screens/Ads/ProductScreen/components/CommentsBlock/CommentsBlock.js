import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import Comment from '../Comment';

import styles from './styles';

class CommentsBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollEnabled: true,
    };
  }

  handlePressWriteComment = () => {
    const { navigation } = this.props;

    navigation.navigate('CreateComment');
  };

  render() {
    const { commentsList, authStatus } = this.props;
    var commentBlockHeight = 400;
    if (commentsList.length === 0) {
      commentBlockHeight = 0;
    }

    return (
      <View>
        <Text style={styles.headerText}>REVIEWS</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={commentsList}
          renderItem={({ item }) => <Comment item={item} />}
          style={{ height: commentBlockHeight }}
        />
        {authStatus ? (
          <Button
            title="Write own comment"
            titleStyle={styles.btnTitle}
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            onPress={this.handlePressWriteComment}
          />
        ) : null}
      </View>
    );
  }
}

export default withNavigation(CommentsBlock);
