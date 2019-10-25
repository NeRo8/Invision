import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { withNavigation } from 'react-navigation';
import { colors } from '../../constants/colors'
import globalStyles from '../../constants/globalStyles';
import styles from './styles';
// import Images from '../../../assets/images';

var swipeoutBtns = [
    {
        text: 'Button'
    }
]

class ProfileNotifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },
                { name: 'Pavlo Laptiev', message: "Hello Alex. How are you?", when: "Today" },

            ],
        };
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Text style={[globalStyles.gothamBook, styles.tagStyle]}>
                        {item.tag}
                    </Text>
                    <Text style={[globalStyles.gothamBold, styles.elementTitlePrice]}>
                        {item.price}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[globalStyles.gothamBook, styles.bottomItems]}>
                        {item.tagType}
                    </Text>
                    <Text style={[globalStyles.gothamBook, styles.bottomItems, { textAlign: 'center' }]}>
                        {item.date}
                    </Text>

                    <Text style={[globalStyles.gothamBook, styles.bottomItems, { textAlign: 'right' }]}>
                        {item.cardType}
                    </Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <SwipeListView
                disableRightSwipe={true}
                style={styles.container}
                data={this.state.categoryList}
                renderItem={(rowData, rowMap) => (
                    <View style={styles.rowFront}>
                        <Image
                            source={require('../../../assets/images/profilepic.jpg')}
                            style={{ width: 45, height: 45, borderRadius: 45 / 2, }}
                        />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={[globalStyles.gothamBook, styles.name]}>{rowData.item.name} </Text>
                            <Text style={[globalStyles.gothamBook, styles.message]}>{rowData.item.message}</Text>
                        </View>
                        <Text style={[globalStyles.gothamBook, styles.when]}>{rowData.item.when}</Text>

                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>
                        <Text></Text>
                        <Button
                            title="Choose category" ></Button>
                    </View>
                )}

                rightOpenValue={-75}
            />

        );
    }
}

export default withNavigation(ProfileNotifications);