import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './styles';

class AuthHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      renderIcon,
      getLabelText,
      activeTintColor,
      inactiveTintColor,
      onTabPress,
      onTabLongPress,
      getAccessibilityLabel,
      navigation,
    } = this.props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerBlock}>
          <Icon
            name="chevron-left"
            type="feather"
            color="white"
            size={32}
            underlayColor="transparent"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>Add ad</Text>
        </View>
        <View style={styles.navBlock}>
          {routes.map((route, routeIndex) => {
            const isRouteActive = routeIndex === activeRouteIndex;
            const tintColor = isRouteActive
              ? activeTintColor
              : inactiveTintColor;

            return (
              <TouchableOpacity
                key={routeIndex}
                style={[styles.activeBlock, { backgroundColor: tintColor }]}
                onPress={() => {
                  onTabPress({ route });
                }}
                onLongPress={() => {
                  onTabLongPress({ route });
                }}
                accessibilityLabel={getAccessibilityLabel({ route })}>
                {renderIcon({ route, focused: isRouteActive, tintColor })}

                <Text
                  style={
                    isRouteActive ? styles.textActive : styles.textUnactive
                  }>
                  {getLabelText({ route })}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(AuthHeader);
