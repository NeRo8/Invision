import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

class FiltersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>TYPE OF AD</Text>
            <View style={styles.selectBlock}>
              <View style={styles.element}>
                <Text style={styles.textElement}>Private</Text>
              </View>
              <View style={styles.elementActive}>
                <Text style={styles.textElementActive}>Buisnes</Text>
              </View>
              <View style={styles.element}>
                <Text style={styles.textElement}>All</Text>
              </View>
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>STATE OF PRODUCT</Text>
            <View style={styles.selectBlock}>
              <View style={styles.element}>
                <Text style={styles.textElement}>New</Text>
              </View>
              <View style={styles.elementActive}>
                <Text style={styles.textElementActive}>b/a</Text>
              </View>
              <View style={styles.element}>
                <Text style={styles.textElement}>All</Text>
              </View>
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>Price</Text>
            <View>
              <View style={styles.blockPrice}>
                <Input
                  placeholder="0"
                  label="From"
                  labelStyle={styles.labelInput}
                  inputContainerStyle={styles.inputStyle}
                  containerStyle={styles.inputContainer}
                />
                <View style={{ width: 10 }} />
                <Input
                  placeholder="0"
                  label="To"
                  labelStyle={styles.labelInput}
                  inputContainerStyle={styles.inputStyle}
                  containerStyle={styles.inputContainer}
                />
              </View>
            </View>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.textBlock}>CHOOSE CATEGORY</Text>
            <ScrollView
              horizontal
              contentContainerStyle={styles.blockPrice}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
              <View style={styles.categoryElement} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default FiltersScreen;
