import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Switch,Button } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import {colors} from '../../constants/colors'

import styles from './styles';
import globalStyles from '../../constants/globalStyles';

class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [
                { title: 'Personal Info & password', header: true },
                { title: 'Change password', header: false },
                { title: 'Change personal information', header: false },
                { title: 'About', header: true },
                { title: 'Privacy Policy', header: false },
                { title: 'Terms of use', header: false },
                { title: 'Support', header: false },
                { title: 'Personal Info & password', header: true },
                { title: 'Notifications', header: false, toggle: true },
                { title: 'Take messages about \nanswers on ads.', header: false, toggle: true },
                { title: 'Receive news, offers and \npromotions from Masaha', header: false, toggle: true }
            ],
        };
    }
    renderItem = ({ item }) => {
        if (item.header) {
            return (
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.header}>
                        <Text style={[styles.elementTitle, globalStyles.gothamBold]}>
                            {item.title}
                        </Text>
                      
                    </View>
                </TouchableOpacity>)
        }
        else if (!item.header) {
        
            if (!item.toggle) {
                return (
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.elementContainer}>
                            <Text style={[styles.elementTitle, globalStyles.gothamBook]}>
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
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.elementContainer}>
                            <Text style={[styles.elementTitle, globalStyles.gothamBook]}>
                                {item.title}
                            </Text>
                            <Switch ios_backgroundColor={colors.DEFAULT} trackColor={{true: colors.HEADER, false: colors.DEFAULT}} ></Switch>
                        </View>
                    </TouchableOpacity>)
            }
            
        }
       

    }

    render() {
        return (
            <View style={{  flex:1, marginTop:  10 }}>
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

export default withNavigation(CategoryScreen);
