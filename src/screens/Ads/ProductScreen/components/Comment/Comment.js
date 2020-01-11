import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <View style={styles.elementContainer}>
        <View style={{ flexDirection: 'row', flex: 1, height: 40 }}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ paddingRight: 10 }}>
              <Avatar
                rounded
                source={item.user__avatar}
                imageProps={{ resizeMode: 'cover' }}
                size={40}
              />
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={styles.userNameComents}>
                {item.user__first_name} {item.user__last_name}
              </Text>
              <StarRating
                disabled
                maxStars={5}
                rating={item.raiting}
                emptyStar="ios-star"
                fullStar="ios-star"
                halfStar="ios-star"
                iconSet="Ionicons"
                fullStarColor={colors.STAR}
                emptyStarColor={colors.UNACTIVE}
                starSize={15}
                starStyle={{ marginRight: 6 }}
              />
            </View>
          </View>
          <View>
            <Text style={[globalStyles.gothamBook, styles.date]}>
              {moment(item.created).format('DD.MM.YYYY')}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={[globalStyles.gothamBook, styles.coment]}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  }
}

export default Comment;
