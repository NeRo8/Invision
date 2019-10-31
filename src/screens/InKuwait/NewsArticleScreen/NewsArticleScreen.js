import React, { Component } from 'react';
import { ScrollView, View, Text, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';
import globalStyles from '../../../constants/globalStyles';
import { colors } from '../../../constants/colors';

class NewsArticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.container}>
            <Icon
              containerStyle={{}}
              name="chevron-left"
              type="feather"
              color="white"
              size={32}
              onPress={() => this.props.navigation.goBack()}
            />
            <Icon
              containerStyle={styles.icons}
              name="share-apple"
              type="evilicon"
              color="white"
              size={32}
              onPress={() => this.props.onPressShere()}
            />
          </View>
        </View>
        <View style={{ backgroundColor: colors.BACKGROUND }}>
          <View style={styles.wraperView}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.block}>
                <Icon
                  name="cellphone-text"
                  type="material-community"
                  color={'#63A3FF'}
                  iconStyle={{ marginRight: 10 }}
                />
                <Text style={[globalStyles.gothamBook, styles.blockText]}>
                  01567 23040
                </Text>
              </View>
              <View style={styles.block}>
                <Icon
                  name="clock"
                  type="octicon"
                  color={'#63A3FF'}
                  iconStyle={{ marginRight: 10 }}
                />
                <Text style={[globalStyles.gothamBook, styles.blockText]}>
                  Since 2017
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <View style={styles.block}>
                <Icon
                  name="cellphone-text"
                  type="material-community"
                  color={'#63A3FF'}
                  iconStyle={{ marginRight: 10 }}
                />
                <Text style={[globalStyles.gothamBook, styles.blockText]}>
                  01567 23040
                </Text>
              </View>
              <View style={styles.block}>
                <Icon
                  name="clock"
                  type="octicon"
                  color={'#63A3FF'}
                  iconStyle={{ marginRight: 10 }}
                />
                <Text style={[globalStyles.gothamBook, styles.blockText]}>
                  Since 2017
                </Text>
              </View>
            </View>
            <View style={styles.descriptionView}>
              <Text style={[globalStyles.gothamBook, styles.description]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with.
              </Text>
            </View>
            <View style={styles.bottomImageView}>
              <Image
                resizeMethod={'resize'}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  flex: 1,
                }}
                source={require('../../../assets/images/Event.jpg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default NewsArticleScreen;
