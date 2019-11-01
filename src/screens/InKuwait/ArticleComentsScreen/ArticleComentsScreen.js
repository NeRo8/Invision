import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';

import styles from './styles';
import globalStyles from '../../../constants/globalStyles';
import { colors } from '../../../constants/colors';

class ArticleComentsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.wraper}>
        <View style={styles.coment}>
          <View style={styles.topOfComent}>
            <Text>Andre Cross</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="clock"
                type="octicon"
                containerStyle={{ marginRight: 8 }}
              />
              <Text>22.09.18</Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ArticleComentsScreen;
