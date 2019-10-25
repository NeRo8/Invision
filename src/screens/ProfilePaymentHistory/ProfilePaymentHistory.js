import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Switch } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { colors } from '../../constants/colors'
import globalStyles from '../../constants/globalStyles';
import styles from './styles';

class ProfilePaymentHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [
                { tag: '#1113', tagType: "Adv ad", date: "10.09.18", price: "-$15", cardType: "MasterCard" },
                { tag: '#1113', tagType: "Adv ad", date: "10.09.18", price: "-$105", cardType: "MasterCard" },
                { tag: '#1113', tagType: "Adv ad", date: "10.09.18", price: "-$55", cardType: "MasterCard" },
                { tag: '#1113', tagType: "Adv ad", date: "10.09.18", price: "-$201", cardType: "MasterCard" },

            ],
        };
    }
    renderItem = ({ item }) => {
            return (
                <View style={styles.itemContainer}>
                    <View  style= {{ flexDirection:"row", marginBottom:10}}>
                        <Text style={[globalStyles.gothamBook, styles.tagStyle]}>
                            {item.tag}
                        </Text>
                        <Text style={[globalStyles.gothamBold, styles.elementTitlePrice]}>
                            {item.price}
                        </Text>
                    </View>
                    <View  style= {{ flexDirection:"row"}}>
                        <Text style={[globalStyles.gothamBook, styles.bottomItems]}>
                            {item.tagType}
                        </Text>
                        <Text style={[globalStyles.gothamBook, styles.bottomItems, {  textAlign:'center'}]}>
                            {item.date}
                        </Text>

                        <Text style={[globalStyles.gothamBook, styles.bottomItems, {  textAlign:'right'}]}>
                            {item.cardType}
                        </Text>
                    </View>
                </View>
            )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.categoryList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item}
                    stickyHeaderIndices={this.state.stickyHeaderIndices}
                />

            </View>
        );
    }
}

export default withNavigation(ProfilePaymentHistory);