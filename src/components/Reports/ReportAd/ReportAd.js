import React, { Component } from 'react';
import { Modal, View, Text, FlatList } from 'react-native';
import { Divider, CheckBox, Icon } from 'react-native-elements';

import { DefaultButton } from '../../Buttons';

import { colors } from '../../../constants';
import styles from './styles';

const CheckBoxVariant = ({ item, onPressItem }) => (
  <CheckBox
    checked={item.active}
    checkedIcon="check-circle"
    uncheckedIcon="radiobox-blank"
    iconType="material-community"
    checkedColor={colors.HEADER}
    size={25}
    title={item.title}
    textStyle={styles.titleStyle}
    wrapperStyle={styles.wrapperStyle}
    containerStyle={styles.containerStyle}
    iconRight={true}
    onPress={() => onPressItem(item.id)}
  />
);

class ReportAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportMessage: null,
      variantList: [
        { id: 0, title: 'Fraud or spam', active: false },
        { id: 1, title: 'Unparliamentary language', active: false },
        { id: 2, title: 'Other', active: false },
      ],
    };
  }

  onChangeActive = id => {
    const { variantList } = this.state;
    var newVariantList = variantList.map(variant =>
      variant.id === id
        ? { ...variant, active: true }
        : { ...variant, active: false },
    );
    this.setState({
      variantList: newVariantList,
    });
  };

  onPressSend = () => {
    const { onPressClose, setReportData } = this.props;
    const { variantList } = this.state;
    var message = variantList.find(variant => variant.active === true);
    setReportData(message.title);
    onPressClose();
  };

  render() {
    const { variantList } = this.state;
    const { show, onPressClose } = this.props;
    return (
      <Modal visible={show} transparent>
        <View style={styles.container}>
          <View style={styles.modalBody}>
            <Icon
              name="close"
              type="material-community"
              iconStyle={styles.iconClose}
              color={colors.UNACTIVE}
              onPress={onPressClose}
              underlayColor="transparent"
            />

            <View style={styles.modalContainer}>
              <Text style={styles.headerText}>What happens?</Text>
              <Text style={styles.underHeaderText}>
                Choose one of option below
              </Text>
              <FlatList
                scrollEnabled={false}
                data={variantList}
                renderItem={({ item }) => (
                  <CheckBoxVariant
                    item={item}
                    onPressItem={this.onChangeActive}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <Divider />}
              />

              <DefaultButton title="Send" onPressButton={this.onPressSend} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ReportAd;
