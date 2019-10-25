import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
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
        this.state = {
            categoryList: [
                { title: 'Full name', header: true },
                { title: 'Please enter your full name', icon: 'md-person', header: false },
                { title: 'Email', header: true },
                { title: 'Please enter your email', icon: 'ios-mail', header: false },
                { title: 'Phone number', header: true },
                { title: 'Please enter your phone number', icon: 'ios-phone-portrait', header: false },
                { title: 'City', header: true },
                { title: 'Select city', icon: 'ios-home', picker: true, header: false },
                { title: 'Save changes', button: true }
            ],
            selectedItems: [
                {
                    id: 7,
                    name: 'Go',
                },
                {
                    id: 8,
                    name: 'Swift',
                }
            ]
        };
    }
    renderItem = ({ item }) => {
        if (item.button) {
            return (
                <TouchableOpacity
                    style={styles.btnStyle}>
                    <Text style={globalStyles.gothamBold, styles.buttonTextStyle}>{item.title}</Text>
                </TouchableOpacity>)
        }
        else if (item.header) {
            return (
                <View style={styles.header}>
                    <Text style={[globalStyles.gothamBold, styles.elementTitle]}>
                        {item.title}
                    </Text>
                </View>
            )
        }
        else if (!item.header) {
            if (!item.picker) {
                return (
                    <Input
                        inputStyle={[globalStyles.gothamBook, styles.elementTitleNonHeader]}
                        leftIcon={() => (
                            <Icon
                                name={item.icon}
                                type="ionicon"
                                color={colors.ICON_GREY_COLOR}
                                size={25}
                            />
                        )}
                        placeholder={item.title}
                        placeholderTextColor={colors.UNACTIVE}
                        leftIconContainerStyle={styles.leftIconContainer}
                        inputContainerStyle={styles.inputContainerS}
                        containerStyle={styles.inputContainer}
                    />)
            }
            else if (item.picker) {
                return (
                    <View style={{ flex: 1 }}>
                        <Icon
                            name={item.icon}
                            type="ionicon"
                            color={colors.ICON_GREY_COLOR}
                            size={25}
                        />
                        <SearchableDropdown 
                            onItemSelect={(item) => {
                                const items = this.state.selectedItems;
                                items.push(item)
                                this.setState({ selectedItems: items });
                                alert(item)
                            }}
                            containerStyle={{ padding: 5 }}
                            onRemoveItem={(item, index) => {
                                const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
                                this.setState({ selectedItems: items });
                            }}
                            itemStyle={{
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#ddd',
                                borderColor: '#bbb',
                                borderWidth: 1,
                                borderRadius: 5,
                            }}
                            itemTextStyle={{ color: '#222' }}
                            itemsContainerStyle={{ maxHeight: 50 }}
                            items={items}
                            defaultIndex={2}
                            resetValue={false}
                            textInputProps={
                                {
                                    placeholder: "placeholder",
                                    underlineColorAndroid: "transparent",
                                    style: {
                                        padding: 12,
                                        borderWidth: 1,
                                        borderColor: '#ccc',
                                        borderRadius: 5,
                                    },
                                    // onTextChange: text =>  value( "asd" )
                                }
                            }
                            listProps={
                                {
                                    nestedScrollEnabled: true,
                                }
                            }
                        />
                    </View>
                )
            }
        }
    }

    render() {
        return (

            <View style={{
                flex: 1, marginTop: 10, marginLeft: 15,
                marginRight: 15,
            }}>
                <KeyboardAwareFlatList
                    data={this.state.categoryList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item}
                    stickyHeaderIndices={this.state.stickyHeaderIndices}
                />

            </View>

        );
    }
}

export default withNavigation(ProfileSettingsPersonalInformaion);