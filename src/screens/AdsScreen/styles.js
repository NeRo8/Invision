import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../constants';

export default StyleSheet.create({
  pagination: {
    position: 'absolute',
    bottom: 10,
    width: 100,
    left: Dimensions.get('window').width / 2 - 50,
    //paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flatListView: {
    backgroundColor: colors.BACKGROUND,
    flex: 1,
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
});
