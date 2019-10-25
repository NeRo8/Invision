import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Switch, Button } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { colors } from '../../constants/colors'
import globalStyles from '../../constants/globalStyles';

import styles from './styles';

let menuType = {
    changePassord: "Change password",
    changePersonalInformaion: 'Change personal information',
    privacyPolicy: 'Privacy Policy'
}

class ProfileSettingsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryList: [
                { title: 'PERSONAL INFO & PASSWORD', header: true },
                { title: menuType.changePassord, header: false },
                { title: menuType.changePersonalInformaion, header: false },
                { title: 'ABOUT', header: true },
                { title: menuType.privacyPolicy, header: false },
                { title: 'Terms of use', header: false },
                { title: 'Support', header: false },
                { title: 'PERSONAL INFO & PASSWORD', header: true },
                { title: 'Notifications', header: false, toggle: true },
                { title: 'Take messages about \nanswers on ads.', header: false, toggle: true },
                { title: 'Receive news, offers and \npromotions from Masaha', header: false, toggle: true },
                { title: 'Log out', button: true }
            ],
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
                    <Text style={[styles.elementTitle, globalStyles.gothamBold]}>
                        {item.title}
                    </Text>

                </View>
            )
        }
        else if (!item.header) {
            if (!item.toggle) {
                return (
                    <TouchableOpacity onPress={() => {
                        if (item.title == menuType.changePassord) {
                            this.props.navigation.navigate('ProfileSettingsChangePassword')
                        }
                        else if (item.title == menuType.changePersonalInformaion) {
                            this.props.navigation.navigate('ProfileSettingsPersonalInformaion')
                        }
                        else if (item.title == menuType.privacyPolicy) {
                            this.props.navigation.navigate('ProfileSettingsPrivacyPolicy')
                        }
                        
                    }}>
                        <View style={styles.elementContainer}>
                            <Text style={[styles.elementTitleNonHeader, globalStyles.gothamBook]}>
                                {item.title}
                            </Text>
                            <Icon
                                name="chevron-right"
                                type="material-community"
                                color="silver"
                                size={32}
                            />
                        </View>
                    </TouchableOpacity>)
            }
            else if (item.toggle) {
                return (
                    <View style={styles.elementContainer}>
                        <Text style={[styles.elementTitleNonHeader, globalStyles.gothamBook]}>
                            {item.title}
                        </Text>
                        <Switch ios_backgroundColor={colors.DEFAULT} trackColor={{ true: colors.HEADER, false: colors.DEFAULT }} ></Switch>
                    </View>
                )
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 10 }}>
                <FlatList
                    data={this.state.categoryList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item}
                    ItemSeparatorComponent={() => (
                        <Divider style={styles.elementDivider} />
                    )}
                    stickyHeaderIndices={this.state.stickyHeaderIndices}
                />

            </View>
        );
    }
}

export default withNavigation(ProfileSettingsScreen);
