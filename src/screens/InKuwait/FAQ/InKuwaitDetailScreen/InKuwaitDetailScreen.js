import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import styles from './styles';
import globalStyles from '../../../../constants/globalStyles';

class InKuwaitDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[globalStyles.gothamMediumRegular, styles.titleHeader]}>
          Is there a cheaper Private english school in Kuwait ?
        </Text>
        <View>
          <View style={styles.rowBlock}>
            <View style={styles.block}>
              <Icon
                name="clock"
                type="octicon"
                color={'#63A3FF'}
                iconStyle={{ marginRight: 10 }}
              />
              <Text style={[globalStyles.gothamBook, styles.blockText]}>
                21.09.18
              </Text>
            </View>
            <View style={styles.block}>
              <Icon
                name="chat"
                type="material-community"
                color={'#63A3FF'}
                iconStyle={{ marginRight: 10 }}
              />
              <Text style={[globalStyles.gothamBook, styles.blockText]}>3</Text>
            </View>
          </View>
          <View style={styles.rowBlock}>
            <View style={styles.block}>
              <Icon
                name="ios-person"
                type="ionicon"
                color={'#63A3FF'}
                iconStyle={{ marginRight: 10 }}
              />
              <Text style={[globalStyles.gothamBook, styles.blockText]}>
                Antonio Nelson
              </Text>
            </View>
            <View style={styles.block}>
              <Icon
                name="tag-outline"
                type="material-community"
                color={'#63A3FF'}
                iconStyle={{
                  marginRight: 10,
                  transform: [{ rotate: '90deg' }],
                }}
              />
              <Text style={[globalStyles.gothamBook, styles.blockText]}>
                Education
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[globalStyles.gothamBook, styles.description]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('InKuwaitAnswers')}
          style={styles.pickerBlock}>
          <Text style={[globalStyles.gothamBook, styles.blockBottomText]}>
            Answers
          </Text>
          <Text
            style={[
              globalStyles.gothamBook,
              styles.blockBottomText,
              { color: 'black' },
            ]}>
            13
          </Text>
        </TouchableOpacity>

        <Button
          title="Write comment"
          titleStyle={[globalStyles.gothamBold, styles.btnTitle]}
          buttonStyle={styles.buttonSend}
          onPress={() =>
            this.props.navigation.navigate('InKuwaitCreateComment')
          }
        />
      </ScrollView>
    );
  }
}

export default InKuwaitDetailScreen;
