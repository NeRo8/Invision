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
            <KeyboardAvoidingView
                behavior="position"
                style={{
                    flex: 1, marginTop: 10, marginLeft: 15,
                    marginRight: 15,
                }}
                enabled={false}
                ref={this.test}
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
                            // {innerRef.scroll.enabled = true}
                            this.test.enabled = true
                            // alert()
                            const items = this.state.selectedItems;
                            items.push(item)
                            this.setState({ selectedItems: items });
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
        /*
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                            <Text style={styles.header}>
                                Header
                            </Text>
                            <TextInput
                                placeholder="Username"
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Password"
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Confrim Password"
                                style={styles.input}
                            />
                            <View style={styles.btnContainer}>
                                <Button title="Submit" onPress={() => null} />
                            </View>
                            <View style={{ flex : 1 }} />
                        </View>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );*/
    }


}
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 100,
        flex: 1,
        justifyContent: "flex-end",
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    input: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12,
    },
});*/

export default withNavigation(ProfileSettingsPersonalInformaion);