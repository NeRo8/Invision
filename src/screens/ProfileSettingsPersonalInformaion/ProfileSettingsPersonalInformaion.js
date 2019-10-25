import React, { Component } from 'react';
import {
    KeyboardAvoidingView, TouchableOpacity,
    Text, View
} from "react-native";
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Input, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { colors } from '../../constants/colors'
import globalStyles from '../../constants/globalStyles';

import styles from './styles';

var items = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'Java',
    },
    {
        id: 3,
        name: 'Ruby',
    },
    {
        id: 4,
        name: 'React Native',
    },
    {
        id: 5,
        name: 'PHP',
    },
    {
        id: 6,
        name: 'Python',
    },
    {
        id: 7,
        name: 'Go',
    },
    {
        id: 8,
        name: 'Swift',
    },
];

class ProfileSettingsPersonalInformaion extends Component {
    constructor(props) {
        super(props);
        this.test = React.createRef();
        this.setState = { selectedItems: [
            {
                id: 7,
                name: 'Go',
            },
            {
                id: 8,
                name: 'Swift',
            }
        ]}
         
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior="position"
                style={{
                    flex: 1, marginTop: 10, marginLeft: 15,
                    marginRight: 15,
                }}
                enabled={false}
                // ref={this.test}
            // onRef={ref => ( 'child' = ref)}
            >

                <Text style={[globalStyles.gothamMediumRegular, styles.elementTitle]}>
                    Full name
                    </Text>
                <Input
                    inputStyle={[globalStyles.gothamBook, styles.elementTitleNonHeader]}
                    leftIcon={() => (
                        <Icon
                            name="md-person"
                            type="ionicon"
                            color={colors.ICON_GREY_COLOR}
                            size={25}
                        />
                    )}
                    placeholder="Please enter your full name"
                    placeholderTextColor={colors.UNACTIVE}
                    leftIconContainerStyle={styles.leftIconContainer}
                    inputContainerStyle={styles.inputContainerS}
                    containerStyle={styles.inputContainer}
                />
                <Text style={[globalStyles.gothamMediumRegular, styles.elementTitle]}>
                    Email
                    </Text>
                <Input
                    inputStyle={[globalStyles.gothamBook, styles.elementTitleNonHeader]}
                    leftIcon={() => (
                        <Icon
                            name="ios-mail"
                            type="ionicon"
                            color={colors.ICON_GREY_COLOR}
                            size={25}
                        />
                    )}
                    placeholder="Please enter your email"
                    placeholderTextColor={colors.UNACTIVE}
                    leftIconContainerStyle={styles.leftIconContainer}
                    inputContainerStyle={styles.inputContainerS}
                    containerStyle={styles.inputContainer}
                />
                <Text style={[globalStyles.gothamMediumRegular, styles.elementTitle]}>
                    Phone number
                    </Text>
                <Input
                    inputStyle={[globalStyles.gothamBook, styles.elementTitleNonHeader]}
                    leftIcon={() => (
                        <Icon
                            name="ios-phone-portrait"
                            type="ionicon"
                            color={colors.ICON_GREY_COLOR}
                            size={25}
                        />
                    )}
                    placeholder="Please enter your phone number"
                    placeholderTextColor={colors.UNACTIVE}
                    leftIconContainerStyle={styles.leftIconContainer}
                    inputContainerStyle={styles.inputContainerS}
                    containerStyle={styles.inputContainer}
                />
                <Text style={[globalStyles.gothamMediumRegular, styles.elementTitle]}>
                    Select city
                    </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        iconStyle={styles.dropDownLeftIconStyle}
                        name="ios-home"
                        type="ionicon"
                        color={colors.ICON_GREY_COLOR}
                        size={25}
                    />
                    <SearchableDropdown
                        onItemSelect={(item) => {
                            // const items = this.state.selectedItems;
                            // items.push(item)
                            // this.setState({ selectedItems: items });
                        }}
                        containerStyle={styles.dropDownContainer}
                        onRemoveItem={(item, index) => {
                            const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
                            this.setState({ selectedItems: items });
                        }}
                        itemStyle={styles.dropDownItemStyle}
                        itemTextStyle={{ color: '#575C64' }}
                        itemsContainerStyle={{ maxHeight: 165 }}
                        items={items}
                        defaultIndex={2}
                        resetValue={false}
                        textInputProps={styles.dropDownInputStyle}
                        listProps={
                            {
                                nestedScrollEnabled: true,
                            }
                        }
                    />
                </View>
                <TouchableOpacity
                    style={styles.btnStyle}>
                    <Text style={globalStyles.gothamBold, styles.buttonTextStyle}>Save changes</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>


        );
        
    }


}

export default withNavigation(ProfileSettingsPersonalInformaion);