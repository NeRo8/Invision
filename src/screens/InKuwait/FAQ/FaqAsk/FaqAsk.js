import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

import { colors, globalStyles } from '../../../../constants';
import styles from './styles';

const ElementList = ({ element, onPressElement, onClose }) => (
  <TouchableOpacity
    style={styles.element}
    onPress={() => {
      onPressElement('category', element.pk);
      onClose('activeCategory', element.name);
      onClose('visible', false);
    }}>
    <Icon
      name="ios-checkmark-circle-outline"
      type="ionicon"
      color={colors.HEADER}
      containerStyle={{ marginHorizontal: 20 }}
    />
    <Text style={styles.text}>{element.name}</Text>
  </TouchableOpacity>
);

class FaqAsk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: null,
        category: null,
        description: null,
        author_full_name: null,
        author_email: null,
      },
      activeCategory: null,
      visible: false,
    };
  }

  componentDidMount() {
    const { getCategoryList, userProfile } = this.props;

    getCategoryList();

    this.setData(
      'author_full_name',
      `${userProfile.first_name} ${userProfile.last_name}`,
    );
    this.setData('author_email', `${userProfile.email}`);
  }

  handlePressSubmit = () => {
    const { token, addQuestion, navigation } = this.props;
    const { data } = this.state;

    addQuestion(token, data);

    navigation.goBack();
  };

  onChangeState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  setData = (name, value) => {
    this.setState(prevState => ({
      data: { ...prevState.data, [name]: value },
    }));
  };

  render() {
    const { userProfile, navigation } = this.props;
    const { activeCategory } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerTextTitle}>TELL ABOUT YOUR AD</Text>

        <Text style={styles.textBlock}>ABOUT QUESTION</Text>

        <Input
          multiline
          placeholder="Enter your questions"
          placeholderTextColor={colors.LABEL_GREY_COLOR}
          inputStyle={styles.input}
          inputContainerStyle={styles.multilineInputContainer}
          containerStyle={styles.inputContainer}
          onChangeText={text => this.setData('title', text)}
        />

        <View style={styles.blockPicker}>
          <Text style={styles.text}>
            {activeCategory !== null ? activeCategory : 'Choose your category'}
          </Text>
          <Icon
            name="chevron-right"
            type="material-community"
            size={32}
            color={colors.LABEL_GREY_COLOR}
            onPress={() => this.onChangeState('visible', true)}
          />
        </View>

        <Input
          multiline
          placeholder="Enter description of your question"
          placeholderTextColor={colors.LABEL_GREY_COLOR}
          inputStyle={styles.input}
          inputContainerStyle={styles.multilineInputContainer}
          containerStyle={styles.inputContainer}
          onChangeText={text => this.setData('description', text)}
        />
        <View style={styles.divider} />

        <Text style={styles.textBlock}>YOUR CONTACT INFO</Text>

        <Input
          value={`${userProfile.first_name} ${userProfile.last_name}`}
          placeholder="Enter your Full name"
          placeholderTextColor={colors.LABEL_GREY_COLOR}
          inputStyle={[styles.input, { textAlignVertical: 'center' }]}
          inputContainerStyle={[styles.multilineInputContainer, { height: 50 }]}
          containerStyle={styles.inputContainer}
          onChangeText={text => this.setData('author_full_name', text)}
        />
        <Input
          value={userProfile.email}
          placeholder="Enter your email address"
          placeholderTextColor={colors.LABEL_GREY_COLOR}
          inputStyle={[styles.input, { textAlignVertical: 'center' }]}
          inputContainerStyle={[styles.multilineInputContainer, { height: 50 }]}
          containerStyle={styles.inputContainer}
          onChangeText={text => this.setData('author_email', text)}
        />
        <Button
          title="Add question"
          titleStyle={[
            globalStyles.gothamBold,
            { fontSize: 15, color: 'white' },
          ]}
          buttonStyle={styles.btnStyle}
          containerStyle={{ marginVertical: 15 }}
          onPress={this.handlePressSubmit}
        />
        <Modal visible={this.state.visible}>
          <View style={{ flex: 1, backgroundColor: colors.BACKGROUND }}>
            <View style={styles.modalHeader}></View>
            <FlatList
              data={this.props.categories}
              renderItem={({ item }) => (
                <ElementList
                  element={item}
                  onPressElement={this.setData}
                  onClose={this.onChangeState}
                />
              )}
            />
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

export default FaqAsk;
