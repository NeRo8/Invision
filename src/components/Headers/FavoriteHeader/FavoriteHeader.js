import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  SafeAreaView,
} from 'react-native';

import styles from './styles';

class FavoriteHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavigation: false,
    };
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
      clearAllFavor,
      authStatus,
    } = this.props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleBlock}>
          <Text style={styles.sideComponent} />
          <Text style={styles.titleScreen}>Favorites</Text>
          {authStatus ? (
            <Text style={styles.sideComponent} onPress={() => clearAllFavor()}>
              Clear All
            </Text>
          ) : (
            <Text style={styles.sideComponent} />
          )}
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

export default FavoriteHeader;
